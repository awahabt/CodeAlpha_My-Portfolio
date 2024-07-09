import React from 'react'
import { miniProj } from '..'
import Button from '../constant/Button'
import ReadMore from '../constant/ReadMore'

const MiniProjects = () => {
  return (
    <div className="w-full h-auto flex flex-col flex-wrap items-center my-10 justify-center max-[1137px]:py-5 min-[1137px]:py-10">
       <div className="text-center ">
        <p className="text-4xl montserrat font-bold ">What have I created?        </p>
        <p className="montserrat text-[18px] font-[500] max-w-[650px] dimWhite pt-5 pb-20">
        Creating is always attractive and I tried to never deprive myself of this pleasure, here you can see the projects published by me.
        </p>
      </div>
      <div className=" montserrat flex gap-8 flex-wrap justify-center px-10">
        {
            miniProj.map((mini, index)=>(
                <div className='flex max-w-[350px] items-center flex-col py-8 px-10 gap-5 mini-proj' key={mini.id}>
                    <div className="bg-[#ffc107] h-[90px] w-[90px] flex justify-center items-center rounded-full ">
                        <img src={mini.image} alt="logo" className='w-[40px]' />
                    </div>
                    <div>
                        <p className="font-bold py-4 text-[18px]">{mini.title}</p>
                        <p className="dimWhite font-[500] leading-7 text-[16px] pb-5">{mini.description}</p>
                        <ReadMore/>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default MiniProjects
