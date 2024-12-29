import React from 'react'

function Balance({value}) {
  return (
    <div className='flex pt-2'>
        <div className='font-bold text-lg ml-4'>
            Your balance:
        </div>

        <div className='flex justify-center flex-col font-semibold ml-4 text-base'>
            Rs.{value}
        </div>
    </div>
  )
}

export default Balance
