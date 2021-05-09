import * as t from "../types";
import { request } from "./../../utils/request.js"

export const getSideData = () => async dispatch => {
    try {
        const marketApiResponse = await request.get("/markets");
        const watchlistApiResponse = await request.get("/watchlists");
        const blogApiResponse = await request.get("/blogs");
        dispatch({ type: t.GET_MARKETS, payload: marketApiResponse.data })
        dispatch({ type: t.GET_WATCHLISTS, payload: watchlistApiResponse.data })
        dispatch({ type: t.GET_BLOGS, payload: blogApiResponse.data })
    }
    catch {
        alert("Connection error");
    }
}
export const getHomePageData = () => async dispatch => {
    try {
        const newfeedApiResponse = await request.get("/newfeeds");
        dispatch({ type: t.GET_FEEDS, payload: newfeedApiResponse.data })
    }
    catch (error) {
        alert("Connection error");
    }
}
export const getMarketDetailData = (id) => async dispatch => {
    try {
        const marketApiResponse = await request.get(`/markets/${id}`);
        dispatch({ type: t.GET_MARKET, payload: marketApiResponse.data })
    }
    catch (error) {
        alert("Connection error");
    }
}