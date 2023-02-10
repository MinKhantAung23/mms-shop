import React from 'react'
import {useNavigate} from 'react-router-dom'

const Success = () => {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col justify-center items-center  bg-secondary min-h-screen'>
        <h1 className='text-4xl animate__animated animate__lightSpeedInRight my-10 font-bold tracking-wider text-indigo-700 drop-shadow-xl'>Thank For Purchasing &hearts;</h1>
        <button onClick={() => navigate('/')} className='bg-button  animate__animated animate__bounceIn text-background px-2 py-2 shadow-lg uppercase rounded text-center'>
            go shopping
        </button>
    </div>
  )
}

export default Success