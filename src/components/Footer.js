import React from 'react';
import { deleteName } from "../redux/Action/index";
import { useDispatch, useSelector } from "react-redux";

const Footer = () => {
  const list = useSelector(state => state.nameList.names)
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(deleteName(e.target.value))
  }
  return (
    <div>
      <h5 className='text-primary'>Delete names</h5>
      <select onChange={handleChange}>
        <option selected>delete</option>
        {list?.map(({ id, name }) => (
          <option value={id}>{name}</option>
        ))}
      </select>
    </div>
  );
}

export default Footer;