import {FETCH_NEW_EXHIBITIONS} from "../types";

const initialState = {
  exhibitions: []
}

const newExhibitionsReducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_NEW_EXHIBITIONS:
      return {...state, exhibitions: action.payload}

    default:
      return state
  }
}

export  default newExhibitionsReducer