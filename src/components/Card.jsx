import React from 'react';
import {AiFillStar} from 'react-icons/ai';
import {Link} from 'react-router-dom'
import { useStateContext } from '../context/StateContext';

const Card = ({product}) => {
    const {title,image,price,rating} = product;
    const {dispatch} = useStateContext()
  return (
    <div className='w-72 border-2 p-5 rounded-md active:border-cyan-700 transform transition hover:shadow-md hover:scale-105'>
        <img src={image} className="h-[200px] mx-auto my-3" alt="" />
        <h3 className='truncate hover:text-clip text-header tracking-wide font-bold my-2'>{title}</h3>
        <div className='flex items-center gap-1'>
            <AiFillStar className='text-danger' />
            <small className='text-button font-bold'>{rating?.rate}</small>
        </div>
        <p className='text-xl text-slate-500 my-2'>${price}</p>
        <div className='flex justify-between'>
            <button onClick={() => dispatch({type: "ADD_TO_CART", payload: product})} className='bg-button text-background px-4 py-2 rounded text-center transform transition hover:scale-90 active:scale-95 shadow-md'>
                Add To Cart
            </button>
            <Link to={`/detail/${product.id}`}>
                <button className='font-semibold decoration-2 underline underline-offset-4 transform transition hover:decoration-button hover:shadow-sm'>
                    Details
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Card