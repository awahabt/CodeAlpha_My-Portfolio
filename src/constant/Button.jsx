import React from 'react'

const Button = ({link, styles, textBtn}) => {
  return (
    <a href={link}><button className={`py-3 px-6 rounded font-bold ${styles}`}>{textBtn}</button></a>
  )
}

export default Button
