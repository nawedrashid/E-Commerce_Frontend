import React from 'react'

const OrderSummary = () => {
    return (
        <div className="h-auto md:min-h-screen max-w-screen-lg mx-auto flex flex-col px-6 pt-20">
          <div className="text-3xl text-secondary font-bold pb-6">Bag(3)</div>
          <div className="md:grid md:grid-cols-3">
            <main className="md:col-span-2 md:mr-5 ">
              <Address
            </main>
            <div className="mt-5 md:mt-0 md:ml-5">
              <CartPriceCard cartItem={cartItem} />
            </div>
          </div>
        </div>
      );
}

export default OrderSummary