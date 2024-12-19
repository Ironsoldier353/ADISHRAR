import openai
import os
# Set up OpenAI API Key
openai.api_key = os.getenv("API_KEY")

def generate_notes(topic, subject, level="High School"):
    """
    Generate structured notes for a given topic and subject using GPT-4.
    Args:
        topic (str): The topic name.
        subject (str): The subject (e.g., Physics, Biology).
        level (str): The learning level (default: High School).
    Returns:
        dict: A dictionary containing notes components.
    """
    # Prompt templates for each section of the notes
    prompts = {
        "definition": f"Provide a concise and accurate definition of the topic '{topic}' in the context of {subject} for {level} students.",
        "concepts": f"Break the topic '{topic}' into 3-4 key concepts or main ideas. Keep explanations simple and clear for {level} students.",
        "examples": f"Provide 2 real-world examples for the topic '{topic}' in the context of {subject}. Make them engaging and relatable for {level} students.",
        "flowchart": f"Suggest a simple step-by-step flowchart to explain '{topic}' for {level} students.",
        "visual": f"Describe a clear and detailed visual diagram or animation that would help explain '{topic}' to {level} students.",
        "quiz": f"Generate 3 quiz questions about '{topic}' for {level} students. Include one multiple-choice question, one true/false question, and one short-answer question."
    }

    # Dictionary to hold the generated content
    notes = {}

    # Loop through prompts and get GPT-4 responses
    for section, prompt in prompts.items():
        try:
            print(f"Generating {section}...")
            response = openai.ChatCompletion.create(
                model="gpt-4",
                messages=[
                    {"role": "system", "content": "You are a helpful educational AI assistant."},
                    {"role": "user", "content": prompt}
                ],
                max_tokens=300  # Adjust based on required length
            )
            # Save the response content
            notes[section] = response['choices'][0]['message']['content']
        except Exception as e:
            notes[section] = f"Error generating {section}: {str(e)}"

    return notes

def display_notes(notes, topic):
    """
    Display the generated notes in a structured format.
    Args:
        notes (dict): Dictionary containing notes sections.
        topic (str): The topic name.
    """
    print("\n" + "=" * 50)
    print(f"AI-Generated Notes for Topic: {topic}")
    print("=" * 50 + "\n")
    
    for section, content in notes.items():
        title = section.capitalize()
        print(f"** {title} **")
        print(content)
        print("\n" + "-" * 50 + "\n")

if __name__ == "__main__":
    # User inputs
    print("Welcome to the AI Notes Generator!")
    topic = input("Enter the topic name: ").strip()
    subject = input("Enter the subject (e.g., Physics, Biology, History): ").strip()
    level = input("Enter the learning level (e.g., High School, Undergraduate): ").strip()

    # Generate notes
    notes = generate_notes(topic, subject, level)

    # Display notes
    display_notes(notes, topic)