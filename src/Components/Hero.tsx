import React from 'react';
import Heropic from "../assets/banner-stack.png"

const Hero = () => {
    return (
        <div className='container mx-auto  flex'>

            <div><h1 className='text-3xl font-semibold pt-20 '>Build Your Ideal <br /> <span className='text-fuchsia-400'>Development Stack</span>
</h1>
            <p className='mt-5'>Explore frontend, backend, database, and tooling options,
compare them side by side, and pick the best tech stack for your next project.</p>
            
            <div className='mt-12 flex gap-5'><button className="btn btn-secondary">Explore Technologies</button>
            <button>Learn More</button>
            </div></div>
            <div><img src={Heropic} alt="" /></div>
            
        </div>
    );
};

export default Hero;