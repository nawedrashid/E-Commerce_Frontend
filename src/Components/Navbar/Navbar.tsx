import React from 'react'

const Navbar: React.FC = () => {

    
  return (
    <div className='flex justify-between items-center w-full h-14 bg-secondary text-primary px-4 fixed'>
        <div>
            <h1 className='text-4xl font-logoF ml-2 hover:scale-105 duration-700 cursor-pointer'>FurniSpot</h1>
        </div>

    </div>
  )
}

export default Navbar