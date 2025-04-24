import React from "react";

const About = () => {
    const socialLinks = [
        { name: 'Instagram', url: '#' },
        { name: 'Behance', url: '#' },
        { name: 'Facebook', url: '#' },
        { name: 'Linkedin', url: '#' }
      ];
    
  return (
    <div className="bg-[#cdea68]">
    <div className="w-full p-20 bg-[#cdea68] rounded-tl-2xl rounded-tr-2xl text-black ">
      <h1 className="font-['Neue Montreal'] text-[3vw] leading-[3.5vw] ">
        Welcome to ExamEase - the ultimate online exam solution! Enjoy secure
        authentication, easy quiz creation, real-time results, and cheat
        detection for a seamless exam experience.
      </h1>
      </div>
      <div className="w-full flex flex-col gap-5 border-t-[1px] pt-10 text-black  border-[#a1b562] ">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row justify-between gap-8 flex-grow">
        {/* Left Column */}
        <div className="md:w-1/4">
          <h2 className="text-[1.6vw] font-medium mb-4">What you can expect:</h2>
        </div>

        {/* Middle Column */}
        <div className="md:w-1/3">
          <div className="space-y-8">
            <p className="text-lg">
            Effortless Quiz Creation,
            Admins can create quizzes with ease, ensuring a hassle-free experience
            Cheat Detection System, Ensures exam integrity with tab-switch monitoring and alerts.
            </p>
            
            <p className="text-lg">
            Experience a seamless examination system with advanced features for students and administrators alike
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-1/5 ml-20">
          <div className="space-y-2">
            <p className="text-lg mb-4">s:</p>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="block text-lg underline hover:opacity-75 transition-opacity"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
