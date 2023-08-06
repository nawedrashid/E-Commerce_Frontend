import React from 'react'
import { TrendingList } from './ObjectArrays/TrendingList'


// type scroll = {
//   scrollRef:HTMLDivElement|null
// }
const Trending:React.FC = (props) => {
  // const { scrollRef} = props
  return (
    <div className="flex flex-col justify-center items-center mt-4-4">
    <p className="text-3xl md:text-4xl font-bold my-4">Trending</p>
    <div className=" grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
      {TrendingList.map(({ id, child, name, discount }) => (
        <div className="shadow-md shadow-primary bg-bgrd py-2 rounded-lg">
          <div className="cursor-pointer">{child}</div>
          <div className="text-secondary font-bold">{name}</div>
          <div className="text-secondary font-semibold">{discount}</div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Trending