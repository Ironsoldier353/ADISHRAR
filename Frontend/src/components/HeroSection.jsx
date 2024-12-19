import React from "react";
import logo2 from "../assets/smart-classroom.jpg"; // Correct path now

const HeroSection = () => {
    return (
        <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white py-16 px-6">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
                {/* Text Content */}
                <div className="text-center md:text-left max-w-xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                        Welcome to the <span className="text-yellow-300">AI Driven Smart Classroom</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8">
                        Empower learning with AI-driven notes, real-time examples,
                        flowcharts, and interactive animations—all automatically tailored to your needs.
                    </p>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start">
                        <a
                            href="#features"
                            className="btn bg-yellow-300 text-black py-3 px-6 rounded-lg font-medium shadow-lg hover:bg-yellow-400 transition"
                        >
                            Explore Features
                        </a>
                        <a
                            href="#demo"
                            className="btn bg-white text-indigo-600 py-3 px-6 rounded-lg font-medium shadow-lg hover:bg-gray-200 transition"
                        >
                            Watch Demo
                        </a>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="flex justify-center h-1/2 w-full">
                    <img
                        src={logo2} // Use the imported image here
                        alt="Smart Classroom Illustration"
                        className="h-[75%] w-[75%] md:h-[85%] md:w-[85%] object-contain drop-shadow-lg"
                    />
                </div>



            </div>
        </section>
    );
};

export default HeroSection;
