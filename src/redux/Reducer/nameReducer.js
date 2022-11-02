const intialState = {
  names: [],
  name: "",
  updateName: ""

};

export const nameReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case "GET_ALL_NAMES":
      return { ...state, names: payload };
    case "ADD_NAMES":
      return { ...state, names: [...state.names, payload] };
    case "UPDATE_NAME":
      console.log(payload);
      let result = state.names.filter(({ id }) => id != +payload.id);
      console.log(result);
      return { ...state, names: [...result, payload.data] };
    case "GET_POST_UPDATE":
      return { ...state, addUpdate: payload, post: {} };
    case "GET_NAME":
      return { ...state, name: payload, updateName: "" };
    case "GET_UPDATE_NAME":
      return { ...state, updateName: payload, name: "" };
    case "DELETE_NAME":
      let resultData = state.names.filter(({ id }) => id != +payload);
      return { ...state, names: resultData };
    default:
      return state;
  }
};
