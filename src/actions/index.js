// запрос отправлен
const booksLoaded = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST',

  }
}

// запрос получен
const booksRequested = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
  }
}

// произошла ошибка
const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error
  }
}

 const bookAddedToCart = (a) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: a
  }
}

const bookDecreaseToCart = (a) => {
  return {
    type: 'BOOK_DECREASE_TO_CART',
    payload: a
  }
}

const fetchBooks = (CommonService, dispatch) => () => {
  dispatch(booksLoaded())
  CommonService.getBooks()
    .then((data) => {
      dispatch(booksRequested(data))
    })
    .catch((err) => dispatch(booksError(err)))
}

export  {
  booksLoaded,
  booksRequested,
  booksError,
  fetchBooks,
  bookAddedToCart,
  bookDecreaseToCart
}