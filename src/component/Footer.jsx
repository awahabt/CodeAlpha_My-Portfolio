import React from 'react'
import Socialmedia from '../constant/Socialmedia';

const Footer = () => {
  return (
    <div className="w-full flex montserrat justify-between flex-wrap items-center text-white gap-10 max-[650px]:justify-center max-[650px]:flex-col max-[1137px]:py-5 min-[1137px]:py-4">
      <div>
        <Socialmedia/>
      </div>
      <div>
        <p className="text-sm text-center">Made with ❤️ and lots of ☕ from 2024 ©</p>
      </div>
    </div>
  )
}

export default Footer
