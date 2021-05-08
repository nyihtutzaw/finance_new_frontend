import * as t from "../types";

const watchlist = (state = {
  lists: [],
}, action) => {
  switch (action.type) {
    case t.GET_WATCHLISTS:
      return {
        ...state,
        lists: action.payload
      };
    default:
      return { ...state };
  }
};

export default watchlist;