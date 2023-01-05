import React from 'react';
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

const Navbar= ()=>{
    return( 
    <div  className='bg-black'>
    <dev className=" h-[3rem] flex items-center justify-between px-4 md:max-w-[90vw] mx-auto">
        {/*Left */}
            <div className='flex items-center'>
            <div className='flex w-[4rem] h-[4rem] bg-black rounded-full'>
                <img src={logo} alt="" className='object-cover '/>
            </div>
            <div className='text-white font-bold'>
                <p className='text-[23px] p1-2'>ADDA.com</p>
            </div>
            </div>
            
        {/*Right */}
        <div className=''>
            <u1 className="text-white font-bold flex items-center gap-4">
                <li>About me</li>
                <li>Blogs</li>
            </u1>
        </div>
    </dev>
    </div>
    );
};

export default Navbar;
