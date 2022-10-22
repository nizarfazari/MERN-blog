const inititialHomeState = {
  datablogs: [],
  page: {
    current_page: 1,
    total_page: 1,
  },
};

const homeReducer = (state = inititialHomeState, action) => {
  if (action.type === "UPDATE_DATA_BLOG") {
    return {
      ...state,
      datablogs: action.payload,
    };
  }

  if (action.type === "UPDATE_PAGE") {
    return {
      ...state,
      page: action.payload,
    };
  }
  return state;
};

export default homeReducer;
