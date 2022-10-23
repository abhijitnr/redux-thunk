import axios from "axios";
import { GET_FEED } from "./feed.actionTypes";

export const getFeeds = () => async (dispatch) => {
  let response = await axios.get("http://localhost:8080/feeds");
  return dispatch({ type: GET_FEED, payload: response.data });
};
