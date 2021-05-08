
import { combineReducers } from "redux"
import market from "./market"
import watchlist from "./watchlist"
import feed from "./feed"
import blog from "./blog"

const rootReducer = combineReducers({
    market: market,
    watchlist:watchlist,
    feed:feed,
    blog:blog
})

export default rootReducer;