const initialState = {
  datablogs: [],
  name: "nizar",
};

const globalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "fazari",
    };
  }
  return state;
};

export default globalReducer;
