import {FETCH_POSTS} from "../types";


const initialState = {
  fetchedPosts: []
}

// PURE FUNCTIONS
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {...state, fetchedPosts: action.payload}
    default: return state
  }
}

export default postsReducer