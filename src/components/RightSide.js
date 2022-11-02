import React from 'react'
import { useSelector } from "react-redux";
const RightSide = () => {
  const list = useSelector(state => state.nameList.names)
  return (
    <div className='text-end'  >
      <h5 className='text-primary'>list of names</h5>

      {list.map(({ name }) => (
        <h5>{name}</h5>
      ))}

    </div>
  )
}

export default RightSide