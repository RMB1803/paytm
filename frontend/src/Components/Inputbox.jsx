import React from 'react'

function Inputbox({label, placeholder}) {
  return (
    <div>
      <div className='text-left font-medium text-sm py-2'>
        {label}
      </div>
      <input placeholder={placeholder} className='w-full px-2 py-1 border rounded border-slate-200'/>
    </div>
  )
}

export default Inputbox
