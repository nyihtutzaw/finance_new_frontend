import * as t from "../types";

const market = (state = {
  lists: [],
  each:{},
}, action) => {
  switch (action.type) {
    case t.GET_MARKETS:
      return {
        ...state,
        lists: action.payload
      };
    case t.GET_MARKET: 
      return {
        ...state,
        each:action.payload
      }
    default:
      return { ...state };
  }
};

export default market;