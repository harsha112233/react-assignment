import React, { useState } from 'react'
import { addNames } from "../redux/Action/index";
import { useDispatch } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();
  const [name, setname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name)
    dispatch(addNames({ name }))

  }
  return (
    <div style={{ height: "250px" }}>

      <form className='mt-3 text-center' onSubmit={handleSubmit}>
        <div >
          <input
            type="text"
            onChange={(e) => setname(e.target.value)}
          />
          <button type="submit" >
            Add Post
          </button>
        </div>


      </form>
    </div>
  )
}

export default Main