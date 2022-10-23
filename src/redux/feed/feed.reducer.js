import { GET_FEED } from "./feed.actionTypes";

const initialState = {
  feeds: [],
};
export const feedReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_FEED: {
      return {
        ...state,
        feeds: payload,
      };
    }
    default: {
      return state;
    }
  }
};
