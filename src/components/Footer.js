import React from 'react';
import {deleteName} from "../redux/Action/index";
import { useDispatch } from "react-redux";

const Footer = ({list}) => {
  const dispatch = useDispatch();
  const handleChange = (e)=>{
      dispatch(deleteName(e.target.value))
  }
  return (
    <div>
       <h5 className='text-primary'>Delete names</h5>
      <select  onChange={handleChange}>
        <option>delete name</option>
        {list?.map(({ id, name }) => (
          <option value={id}>{name}</option>
        ))}
      </select>
    </div>
  );
}

export default Footer;