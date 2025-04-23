// import React from "react";

// const Navbar = () => {
//   return (
//     <div className="fixed z-[999] w-full px-20 py-8 font-['Neue Montreal'] flex justify-between items-center">
//       <div className="logo text-[3vw] font-semibold">
//         <h1>ExamEase</h1>
//       </div>
//       <div className="links flex gap-10">
//         {["Home", "About us", "Features"].map((item, index) => (
//           <a key={index} className="text-[1.2vw] capitalize font-light">
//             {item}
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Register from "../pages/Register";

const Navbar = () => {
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setNavbarVisible(false); // Hide when scrolling down
    } else {
      setNavbarVisible(true); // Show when scrolling up
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed z-[999] w-full px-20 py-8 font-['Neue Montreal'] flex justify-between items-center transition-transform duration-300 ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="logo text-[3vw] font-semibold">
        <h1>ExamEase</h1>
      </div>
      <div className="links flex items-center gap-10">
  <Link to="/" className="text-[1.2vw] capitalize font-light hover:text-zinc-500  transition-colors">
    Home
  </Link>
  <Link to="/about" className="text-[1.2vw] capitalize font-light hover:text-zinc-500 transition-colors">
    About us
  </Link>
  <Link to="/features" className="text-[1.2vw] capitalize font-light hover:text-zinc-500 transition-colors">
    Features
  </Link>
  <div>
    <Link to="/login">
      <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full shadow-md font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
        Login
      </button>
    </Link>
  </div>
</div>

    </div>
  );
};

export default Navbar;
