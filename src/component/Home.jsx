import React from 'react';
import { ReactTyped } from 'react-typed';
import { hero } from '../assets';

const Home = () => {
  const text = "FrontEnd Developer";
  return (
    <div className="w-full flex flex-wrap items-center justify-center gap-20 py-32">
      <div className="py-10">
        <p className="text-3xl montserrat font-bold text-[#ffc107]">Hi There, I'm</p>
        <p className="text-8xl montserrat font-bold max-w-[650px] py-5">Abdul <br />Wahab Tahir</p>
        <div className="flex flex-wrap gap-2">
          <p className="text-3xl montserrat font-bold">a passionate </p>
          <p className="text-4xl montserrat font-bold text-[#ffc107] typing-text">
            <ReactTyped strings={[text]}
            typeSpeed={100}
            loop
            backSpeed={40}/>
            
          </p>
        </div>
      </div>
      <div className=' flex py-10'>
        <img src={hero} alt="Profile" className='w-[400px]' />
      </div>
    </div>
  )
}
export default Home;