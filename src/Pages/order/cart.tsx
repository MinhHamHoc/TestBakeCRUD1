import React from 'react'
import { useCart } from 'react-use-cart'


function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();


  if (isEmpty) return <h1 className='text-center'> Your Cart is Empty</h1>

  return (
    <section className='py-4 container'> 
      <div className='row justify-content-center'>
        <div className='col-12'>
          <h5>Cart ({totalUniqueItems}) total Items: ({totalItems}) </h5>
        </div>
      </div>
    </section>
  )
}

export default Cart