import React from 'react'

function AppBar() {
  return (
    <div className='flex justify-between h-14 shadow'>
        <div className='flex justify-center flex-col font-medium ml-4 h-full'>
            PayTM App
        </div>

        <div className='flex'>
            <div className='flex justify-center flex-col h-full mr-2'>
                Hello
            </div>

            <div className='flex bg-slate-300 rounded-full w-12 h-12 mt-1 mr-3 justify-center'>
                <div className='flex justify-center flex-col text-xl'>
                    U
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default AppBar
