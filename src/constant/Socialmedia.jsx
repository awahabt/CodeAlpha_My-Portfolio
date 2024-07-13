import React from 'react'
import { SocialmediaLinks } from '..'

const Socialmedia = () => {
  return (
    <div className="flex gap-5">
      {
        SocialmediaLinks.map((image, index)=>(
            <a href={image.link} key={image.title}><img src={image.icon} alt={image.title} className='w-[20px]' /></a>
        ))
      }
    </div>
  )
}

export default Socialmedia
