import * as t from "../types";

const feed = (state = {
  lists: [],
}, action) => {
  switch (action.type) {
    case t.GET_FEEDS:
      return {
        ...state,
        lists: action.payload
      };
    default:
      return { ...state };
  }
};

export default feed;