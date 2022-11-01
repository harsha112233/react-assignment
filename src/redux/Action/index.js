import { request } from "../../CustomHooks/useFetch";

export const getAllNames = () => async (dispatch) => {
  const data = await request("GET", "http://localhost:3001/list");
  dispatch({ type: "GET_ALL_NAMES", payload: data });
};

export const addNames = (body) => async (dispatch) => {
  const data = await request("POST", "http://localhost:3001/list", body);
  dispatch({ type: "ADD_NAMES", payload: data });
};

export const updateNames = (id, body) => async (dispatch) => {
  const data = await request("PUT", `http://localhost:3001/list/${id}`, body);
  dispatch({ type: "UPDATE_NAME", payload: {data:data,id:id} });
};
export const getNames = (id) => async (dispatch) => {
  const data = await request("GET", `http://localhost:3001/list/${id}`);
  dispatch({ type: "GET_NAME",payload:data});
};

export const deleteName = (id) => async (dispatch) => {
    const data = await request("DELETE", `http://localhost:3001/list/${id}`);
  
    dispatch({ type: "DELETE_NAME",payload:id});
  };
