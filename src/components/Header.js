import React, { useEffect, useState } from 'react'
import { updateNames, getNames } from "../redux/Action/index";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.nameList.names)
  const updateName = useSelector((state) => state?.nameList?.updateName);

  const [postId, setPostId] = useState();

  const [name, setname] = useState("");
  useEffect(() => {
    if (updateName) {
      setname(updateName)
    }
  }, [updateName])
  const handleChange = (e) => {
    setPostId(e.target.value);
    dispatch(getNames(e.target.value, 'GET_UPDATE_NAME'));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateNames(postId, { name }));
  };
  return (
    <div className='my-4'>
      <h5 className='text-primary'>Update name</h5>
      <select className='my-2' onChange={handleChange}
      >
        <option selected>update name</option>
        {list?.map(({ id, name }) => (
          <option value={id}>{name}</option>
        ))}
      </select>
      {postId && (
        <form onSubmit={handleSubmit}>
          <div >
            <span >
              Name :
            </span>
            <input
              type="text"
              value={name.name}
              onChange={(e) => setname(e.target.value)}
            /> <button type="submit" class="btn btn-primary btn-sm">
              Update name
            </button>
          </div>

        </form>
      )}
    </div>
  )
}

export default Header