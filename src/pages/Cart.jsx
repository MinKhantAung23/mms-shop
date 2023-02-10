import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import CartItem from '../components/CartItem'
import { useStateContext } from '../context/StateContext'

const Cart = () => {
    const {state: {cart}, dispatch} = useStateContext()
    const [total, setTotal] = useState(0)
    const navigate = useNavigate()
    const checkoutHandler = () => {
        dispatch({type: "CART_EMPTY"})
        navigate('/success')
    }

    const incresePrice = (price) => {
        setTotal(total + price)
    }

    const decresePrice = (price) => {
        setTotal(total - price)
    }
    
    useEffect(() => {
        setTotal(cart.reduce((initial, c) => initial + c.price , 0))
    }, [])
  return (
    <>
        {cart.length > 0 ? (
            <div className='grid grid-cols-4'>
                <div className='col-span-3 flex flex-col gap-5 my-10'>
                    {cart?.map(item => (
                        <CartItem key={item.id} item={item} incresePrice={incresePrice} decresePrice={decresePrice} />
                    ))}
                </div>
                <div className='col-span-1 my-10'>
                    <div className='bg-secondary p-10 rounded shadow-lg'>
                        <h1 className='text-3xl font-semibold'>Total Price <br/> ${total.toFixed(2)} </h1>
                        <button onClick={checkoutHandler} className='px-5 py-2 mt-6 bg-button text-white rounded shadow-md uppercase hover:scale-95 transform transition'>Check Out</button>
                    </div>
                    <button onClick={() => dispatch({type: "CART_EMPTY"})} className='px-5 py-2 mt-5 bg-danger text-white rounded shadow-md shadow-red-500 uppercase hover:bg-opacity-80 transition transform'>Cart Empty</button>
                    <button onClick={() => navigate(-1)} className='px-3 py-2 mx-8 bg-danger text-white rounded-md shadow-red-500 shadow-md uppercase hover:bg-opacity-80 transition transform'>back</button>
                </div>
            </div>
        ) : (
            <div className='flex justify-center'>
                <div className='bg-secondary mt-28 p-20 rounded shadow-lg animate__animated animate__backInDown'>
                    <h1 className='text-4xl text-white font-semibold my-5 tracking-wider'>Your Cart is Empty</h1>
                    <button onClick={() => navigate("/")} className="px-4 py-2 rounded bg-danger text-white uppercase shadow-md hover:scale-95 transition">
                        Go Shopping
                    </button>
                </div>
            </div>
        )}
        
    </>
  )
}

export default Cart