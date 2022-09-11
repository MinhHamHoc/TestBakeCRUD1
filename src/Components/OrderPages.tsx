import React from 'react'
import OrderPage from '../Pages/order'
import Cart from '../Pages/order/cart'
import { CartProvider } from 'react-use-cart'


function OrderPages() {
  return (
    <>
        <CartProvider>
            <OrderPage/>
            <Cart/>
        </CartProvider>
    </>
  )
}

export default OrderPages