import axios from "axios";
import { GET_POST } from "./post.actionTypes";

export const getPosts = () => async (dispatch) => {
  let response = await axios.get("http://localhost:8080/posts");
  return dispatch({ type: GET_POST, payload: response.data });
};
