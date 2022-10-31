import React,{useState} from 'react'

const LeftSide = ({list}) => {
  const [selectname,setselectname]=useState("")
  console.log("list",list)
  return (
    <>
    <h5 className='text-primary'>Get data</h5>
      <select onChange={(e)=>setselectname(e.target.value)}> 
         <option>List</option>
         {list?.map(({ id, name }) => (
          <option value={name}>{name}</option>
        ))}
          

      
      </select>
      
      
        <h5 className='text-info'>{selectname}</h5>
      
      {/* {singlePost?.title && (
        <ul class="list-group mt-3">
          <li class="list-group-item">{singlePost?.title}</li>
          <li class="list-group-item">{singlePost?.author}</li>
        </ul>
      )} */}
    </>
  )
}

export default LeftSide