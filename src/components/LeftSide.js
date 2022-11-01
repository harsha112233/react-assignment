import React,{useState} from 'react'
import { getNames } from "../redux/Action/index";
import { useDispatch, useSelector } from "react-redux";

const LeftSide = ({list}) => {
  const nameList = useSelector((state) => state?.nameList?.name);
  

  console.log("list",list)
  const dispatch = useDispatch();
  const handleChange = (e) => {
    console.log("dfdf",e.target.value)
    console.log("nameList",nameList)
    dispatch(getNames(e.target.value));
  };
  return (
    <>
    <h5 className='text-primary'>Get data</h5>
      <select onChange={handleChange}> 
         <option>List</option>
         {list?.map(({ id, name }) => (
          <option value={id}>{name}</option>
        ))}
          

      
      </select>
      
      
       
      
      {nameList?.name && (
         <h5 className='text-info' >{nameList?.name}</h5>
         
    
      )}
    </>
  )
}

export default LeftSide