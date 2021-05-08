import * as t from "../types";

const market = (state = {
  lists: [],
}, action) => {
  switch (action.type) {
    case t.GET_MARKETS:
      return {
        ...state,
        lists: action.payload
      };
    default:
      return { ...state };
  }
};

export default market;