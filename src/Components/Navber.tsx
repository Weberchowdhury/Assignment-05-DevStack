import React from "react";
import Logo from "../assets/logo-text.png"




const Navber = () => {
  return (
    <nav className="flex justify-between container mx-auto text-center">
      <div className="flex">
       <img src={Logo} alt="" />
        
      </div>
      <div>
        <ul className="flex gap-4 text-center justify-center">
          <li>Home</li>
          <li>Tecnologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex text-center justify-center">
        <button>Sign in</button>
        <button>Sign up</button>
      </div>
    </nav>
  );
};

export default Navber;
