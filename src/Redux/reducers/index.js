import updateBookList from './component/book-list';
import updateShoppingCart from './component/shopping-cart'
import {combineReducers} from "redux";
import appReducer from "./component/appReducer";
import postsReducer from "./component/postReducer";
import newExhibitionsReducer from "./component/newExhibitionsReducer";
import allExhibitionsReducer from "./component/allExhibitionsReducer";

// reducer  должен вернуть полный объект state
const reducer = combineReducers({
  bookList: updateBookList,
  shoppingCart: updateShoppingCart,
  app: appReducer,
  posts: postsReducer,
  newExhibitions: newExhibitionsReducer,
  allExhibitions: allExhibitionsReducer
})

export default reducer

