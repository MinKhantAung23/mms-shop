import React, { useState } from 'react'
import { AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai'
import { GoTrashcan} from 'react-icons/go'
import { useStateContext } from '../context/StateContext'

const CartItem = ({item, incresePrice, decresePrice }) => {
    const {dispatch} = useStateContext()
    const [qty, setQty] = useState(1)
    const increseQty = () => {
        setQty(prev => prev + 1)
        incresePrice(item.price)
    }
    const decreseQty = () => {
        if(qty > 1){
            setQty(prev => prev - 1)
            decresePrice(item.price)
        }
    }
    const removeItemHandler = () => {
        decresePrice(item?.price * qty);
        dispatch({ type: "REMOVE_FROM_CART", payload: item })          
    }
  return (
    <div className='flex items-center gap-10 border-2 p-4 mr-5 rounded-md bg-secondary transition transform hover:shadow-lg hover:shadow-slate-600' key={item.id}>
        <div className='w-1/4'>
            <img src={item.image} className='h-36 rounded p-3 border-2' alt="" />
        </div>
        <div>
            <h3 className='text-lg font-bold'>{item?.title}</h3>
            <p className='text-xl text-cyan-600 font-bold mt-2'>${(item?.price * qty).toFixed(2)}</p>
            <div className='flex gap-4 items-center mt-3'>
                <AiFillMinusSquare onClick={decreseQty} className='text-danger text-xl rounded cursor-pointer'/>
                <h1 className='text-xl font-bold'>{qty}</h1>
                <AiFillPlusSquare onClick={increseQty} className='text-button text-xl rounded cursor-pointer'/>
                <GoTrashcan onClick={removeItemHandler} className='text-danger text-xl cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default CartItem