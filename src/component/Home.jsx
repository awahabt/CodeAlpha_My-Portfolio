import React from 'react';
import { ReactTyped } from 'react-typed';
import { hero } from '../assets';
import Socialmedia from '../constant/Socialmedia';

const Home = () => {
  const text = "FrontEnd Developer";
  return (
    <div className="w-full flex flex-wrap items-center justify-evenly max-[1197px]:justify-center max-[1197px]:gap-5 max-[1137px]:py-10 min-[1137px]:py-32 ">
      <div className="py-10 max-[1137px]:text-center">
        <p className="text-3xl montserrat font-bold text-[#ffc107]">Hi There, I'm</p>
        <p className="text-8xl montserrat max[450px]:text-center font-bold max-w-[650px] py-5 max-[450px]:text-6xl">Abdul<br />Wahab Tahir</p>
        <div className="flex flex-wrap gap-2 h-[125px] max-[600px]:flex-col">
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