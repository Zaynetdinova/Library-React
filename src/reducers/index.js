import updateBookList from './component/book-list';
import updateShoppingCart from './component/shopping-cart'

// reducer  должен вернуть полный объект state

const  reducer = (state, action) => {
  console.log(action.type )
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action)
  }
}

export default  reducer;