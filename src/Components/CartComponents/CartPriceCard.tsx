import React from 'react'
import { cartProp } from '../../Types/PropsList'

const CartPriceCard:React.FC<cartProp> = () => {
  return (
    <div className='flex flex-col gap-2 text-secondary p-4 rounded-lg bg-primary shadow-secondary w-full'>
      <div className='text-2xl font-bold'>Price Details</div>
      <div className='flex justify-between px-4 my-2 font-semibold'>
        <div>Product Name</div>
        <div>Price</div>
      </div>
      <hr />
      <div className='flex justify-between px-4 my-2 font-semibold'>
        <div>Total</div>
        <div>Price</div>
      </div>
      <button className="text-sm bg-secondary my-4 mx-auto py-2 px-8 text-primary rounded-md hover:scale-105 duration-300">Proceed to Checkout</button>
    </div>
  )
}

export default CartPriceCard