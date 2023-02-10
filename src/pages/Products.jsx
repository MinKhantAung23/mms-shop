import React, { useContext, useEffect, useState } from 'react'
import Card from '../components/Card'
import { useStateContext } from '../context/StateContext'
import Spinner from '../spinner/spinner';

const Products = () => {
    const { state: {products} } = useStateContext();
  return (
    <div className='flex flex-wrap gap-7 justify-center my-10'>
      {products.length > 0 ? (
        products?.map(product => (
          <Card key={product.id} product={product} />
        ))
      ) : (<Spinner/>)}
    </div>
  )
}

export default Products