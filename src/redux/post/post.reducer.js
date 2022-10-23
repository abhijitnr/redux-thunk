import { GET_POST } from "./post.actionTypes";

const initialState = {
  posts: [],
};
export const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POST: {
      return {
        ...state,
        posts: payload,
      };
    }
    default: {
      return state;
    }
  }
};
