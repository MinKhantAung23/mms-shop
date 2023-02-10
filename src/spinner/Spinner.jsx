import React from 'react'

const Spinner = () => {
  return (
    <div className='flex items-center justify-center'>
         <div className="w-12 h-12 rounded-full animate-spin
        border-4 border-solid border-red-500 border-t-transparent"></div>
    </div>
  )
}

export default Spinner