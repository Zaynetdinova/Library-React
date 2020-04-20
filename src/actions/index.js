// запрос отправлен
import {
  ACTION_NEW_EXHIBITIONS,
  HIDE_LOADER,
  REQUEST_POSTS,
  SHOW_LOADER
} from "../reducers/types";

// const booksLoaded = () => {
//   return {
//     type: 'FETCH_BOOKS_REQUEST',
//   }
// }
//
// // запрос получен
// const booksRequested = (newBooks) => {
//   return {
//     type: 'FETCH_BOOKS_SUCCESS',
//     payload: newBooks
//   }
// }
//
// // произошла ошибка
// const booksError = (error) => {
//   return {
//     type: 'FETCH_BOOKS_FAILURE',
//     payload: error
//   }
// }
//
//  const bookAddedToCart = (a) => {
//   return {
//     type: 'BOOK_ADDED_TO_CART',
//     payload: a
//   }
// }
//
// const bookDecreaseToCart = (a) => {
//   return {
//     type: 'BOOK_DECREASE_TO_CART',
//     payload: a
//   }
// }

export function showLoader() {
  return({
    type: SHOW_LOADER
  })
}

export function hideLoader() {
  return({
    type: HIDE_LOADER
  })
}

export function getNewExhibitions() {
  return({
    type: ACTION_NEW_EXHIBITIONS
  })
}

export function creatPosts () {
  return {
    type: REQUEST_POSTS
  }
}

