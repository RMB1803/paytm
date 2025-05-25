import React from 'react'

function Inputbox({label, placeholder, onChange}) {
  return (
    <div>
      <div className='text-left font-medium text-sm py-2'>
        {label}
      </div>
      <input placeholder={placeholder} onChange={onChange} className='w-full px-2 py-1 border rounded border-slate-200'/>
    </div>
  )
}

export default Inputbox
