import {FETCH_ALL_EXHIBITIONS} from "../types";

const initialState = {
  exhibitions: [
    {id: 1, title: 'Античная литература и искусство, Женский силуэт на фоне истории', img: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'},
    {id: 2, title: 'Тематические выставки', img: 'https://images.unsplash.com/photo-1547555999-14e818e09e33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80'},
    {id: 3, title: 'Постоянно-действующие выставки', img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1074&q=80'},
    {id: 4, title: 'Античная литература и искусство', img: 'https://images.unsplash.com/photo-1467951591042-f388365db261?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'},
    {id: 5, title: 'Женский силуэт на фоне истории', img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1074&q=80'},
    {id: 6, title: 'Античная литература и искусство', img: 'https://images.unsplash.com/photo-1467951591042-f388365db261?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'},
  ]
}

const allExhibitionsReducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_ALL_EXHIBITIONS:
      return {...state, exhibitions: action.payload}

    default:
      return state
  }
}

export  default allExhibitionsReducer