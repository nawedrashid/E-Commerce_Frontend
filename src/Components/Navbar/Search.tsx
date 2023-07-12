import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Search :React.FC = () => {

  return (
    <div className='flex items-center mx-28 w-full rounded-md bg-primary brightness-150 px-4 py-2'>
        <FaSearch className='text-secondary text-lg block float-left cursor-pointer mr-2' />
        <input type={'search'} placeholder='Search' className='placeholder-secondary w-full text-secondary focus:outline-none' />
    </div>
  )
}

export default Search