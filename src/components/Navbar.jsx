import React from 'react'
import {Link} from 'react-router-dom'
import {FaShopify, FaSearch, FaShoppingCart} from 'react-icons/fa'
import { useStateContext } from '../context/StateContext'

const Navbar = () => {
    const {search, setSearch, state : {cart}} = useStateContext();
  return (
    <nav className='sticky top-0 z-50 '>
        <div className='flex items-center justify-between px-5 py-2 bg-gray-50 shadow-md'>
            <Link to='/'>
                <div className='flex items-center gap-2'>
                    <FaShopify className='text-4xl text-danger'/>
                    <h1 className='uppercase text-xl tracking-wider text-header font-bold'>
                        mms-shop
                    </h1>
                </div>
            </Link>
            <div className='flex items-center gap-3'>
                <Link to='/cart'>
                    <div className='flex items-center gap-2 px-4 py-1 bg-gray-600 rounded text-secondary hover:shadow-md'>
                        <FaShoppingCart className='text-xl'/>
                        <small className='text-lg'>{cart.length}</small>
                    </div>
                </Link>
                <div className='flex items-center gap-2 border-2 rounded-md px-3 py-2'>
                    <FaSearch/>
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value )} className='outline-none bg-transparent' placeholder='Search' />
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar