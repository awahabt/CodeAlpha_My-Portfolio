import React from 'react'

const Button = ({styles, textBtn}) => {
  return (
    <button className={`py-3 px-6 rounded font-bold ${styles}`}>{textBtn}</button>
  )
}

export default Button
