import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="flex flex-col text-white bg-zinc-900 py-8 w-full box-border">
      <div className="flex flex-col gap-16 px-[8vw]">
        {/* Title Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-8 lg:gap-0">
          <div className="flex flex-col gap-4 max-w-[650px]">
            <p className="text-[1.25rem] lg:text-[2.75rem] font-['Poppins'] tracking-tighter">
              Online Examination System For College Students
            </p>
          </div>

          {/* Menu Links */}
          <div className="flex flex-wrap gap-12">
            <div className="flex flex-col text-[1.15rem] lg:text-[1.5rem] gap-4">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/features">Features</Link>
            </div>
          </div>
        </div>

        {/* Email Section */}
        <div className="lg:flex lg:justify-center border-t-2 border-white py-4">
          <p> © 2025 Online Examination System. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
