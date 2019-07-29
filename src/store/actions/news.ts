import { NewsParams, API } from "../../api";
import { Dispatch } from "react";
import { NewsAction } from "../types/news";
import { RootState } from "../reducers";
// import { ThunkAction } from "redux-thunk";
// import { AppState } from "../reducers";
// import { Action } from "redux";

export const getNews = (params: NewsParams) => async (
  dispatch: Dispatch<NewsAction>,
  getState: () => RootState,
  api: API
) => {
  dispatch({ type: 'news/get/request' })
  try {
    debugger
    const { articles, totalResults } = await api.getNews(params)
    debugger
    dispatch({ type: 'news/get/resolve', payload: {} })
  } catch (err) {
    dispatch({ type: 'news/get/reject', payload: err })
  }
}