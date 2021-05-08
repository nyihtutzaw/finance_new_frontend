import * as t from "../types";
const blog = (state = {
    lists: [],
}, action) => {
    switch (action.type) {
        case t.GET_BLOGS:
            return {
                ...state,
                lists: action.payload
            };
        default:
            return { ...state };
    }
};
export default blog;