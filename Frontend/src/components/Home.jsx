import React from 'react';
import Navbar from './shared/Navbar';
import HeroSection from './HeroSection'
import Footer from './shared/Footer'; // Import the Footer component

function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar at the top */}
            <Navbar />



            {/* Main Content */}
            <div className="flex-grow">
                {/* Hero Section */}
                <HeroSection />
            </div>

            {/* Footer at the bottom */}
            <Footer />
        </div>
    );
}

export default Home;
