import React from 'react'
import { Link } from 'react-router-dom'

function Bottomwarning({label, buttonText, to}) {
  return (
    <div className='text-sm flex justify-center'>
      <div>
        {label}
      </div>

      <Link to={to} className='pointer cursor-pointer underline pl-1'>
        {buttonText}
      </Link>
    </div>
  )
}

export default Bottomwarning
