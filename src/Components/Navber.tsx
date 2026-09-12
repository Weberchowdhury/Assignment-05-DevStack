import React from "react";
import Logo from "../assets/logo-text.png"




const Navber = () => {
  return (
    <nav className="flex justify-between  text-center m-3 container mx-auto py-2 p-15 w-[1279.94] ">
      <div className="flex">
       <img src={Logo} alt="" />
        
      </div>
      <div>
        <ul className="flex gap-4 text-center justify-center ">
          <li>Home</li>
          <li>Tecnologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex text-center justify-center gap-2">
        <button className="">Sign in</button>
        <button className="border bg-red-400 rounded-4xl p-2">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navber;
