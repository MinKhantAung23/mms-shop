import React, { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import {HiOutlineArrowCircleLeft} from 'react-icons/hi'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getData } from '../api/api'
import { useStateContext } from '../context/StateContext'
import Spinner from '../spinner/spinner'

const ProductDetail = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})
    const [products, setProducts] = useState([])
    const {dispatch} = useStateContext()
    const navigate = useNavigate()

    const getProductDetail = async() => {
        setProduct(await getData(`/products/${id}`))
    }

    const getProductByCata = async() => {
        const data = await getData(`/products/category/${product.category}`)
        const filterData = data?.filter(item => item.id !== product.id)
        setProducts(filterData)
    }
    
    useEffect(() => {
        getProductDetail()
        getProductByCata()
    },[products, product])
  return (
    <>
        {product && products.length> 0 ? (
            <div>
                <div className='flex gap-5 items-start my-16'>
                    <img src={product.image} className="h-96 border-2 shadow-lg p-10 hover:border-cyan-500 rounded transform transition" alt="" />
                    <div className='flex flex-col gap-4 mt-5'>
                        <p className='text-base w-40 rounded-full px-2 py-1 font-normal shadow-md text-background text-center bg-button'>{product?.category}</p>
                        <h3 className='text-2xl font-semibold underline underline-offset-4 text-header'>{product?.title}</h3>
                        <div>
                            <p className='text-xl font-medium text-header'>Description</p>
                            <p className='text-lg tracking-wide mt-1 text-slate-500 leading-8'>{product?.description}</p>
                        </div>
                        <p className='flex items-center gap-2'>
                            <AiFillStar className='text-lg text-danger '/>
                            <small className='text-slate-500 text-lg font-semibold'>{product?.rating?.rate}</small>
                        </p>
                        <p className='text-2xl font-bold text-gray-600'>${product?.price}</p>
                        <div>
                            <button onClick={() => dispatch({type: "ADD_TO_CART", payload: product})} className='bg-button text-background w-40 shadow-lg px-5 py-2 rounded-md transform transition hover:scale-90 active:scale-95'>Add to Cart</button>
                            <Link to="/success">
                                <button className='bg-blue-900 ml-4 text-background w-40 shadow-lg px-5 py-2 rounded-md transform transition hover:scale-90 active:scale-95'>Buy Now</button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <HiOutlineArrowCircleLeft onClick={() => navigate(-1)} className='text-2xl font-semibold text-slate-500'/>
                    </div>
                </div>
                <div className='my-20'>
                    <h1 className='font-semibold text-xl text-header'>You may also like</h1>
                    <div className='my-10 flex flex-wrap gap-7 '>
                        {products?.map(item => (
                            <div key={item.id}>
                                <img src={item?.image} className="h-52 rounded p-5 border-2 shadow-lg hover:border-cyan-500 transform transition" alt="" />
                                <p className='font-semibold mt-3 text-lg text-slate-700'>${item?.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ) : (
            <Spinner className=""/>
        )}
    </>
  )
}

export default ProductDetail