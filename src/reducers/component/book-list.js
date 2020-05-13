const initialState = {
  books: [],
  loading: true,
  error: null,
}

const  updateBookList = (state = initialState, action) => {
  // if (state === undefined) {
  //   return {
  //
  //   }
  // }
  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return  {
        books: [],
        loading: true,
        error: null
      };
    case 'FETCH_BOOKS_SUCCESS':
      return {
        books: action.payload,
        loading: false,
        error: null
      };
    case 'FETCH_BOOKS_FAILURE':
      return {
        books: [],
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}

export default updateBookList