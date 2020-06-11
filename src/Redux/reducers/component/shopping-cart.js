const initialState = {
  cartItems: [],
  orderTotal: 340
}

const  updateShoppingCart = (state = initialState, action) => {

  switch (action.type) {
    case 'BOOK_DECREASE_TO_CART':
      return updateOrder(state, action.payload, -1)

    case 'BOOK_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1)

    default:
      return state
  }
}

const updateCartItem = (book, item = {}, quantity) => {
  const {
    id = book.id,
    name = book.title,
    count = 0,
    price = 150
  } = item

  return {
    id,
    name,
    count: count + quantity,
    price: price + quantity * 100
  }
}


const updateCartItems = (cartItems, item, idx) => {
  if ( item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ]
  }
  if ( idx === -1) {
    return [
      ...cartItems,
      item
    ]
  }

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1)
  ]

}

const updateOrder = (state, bookId, quantity) => {
  const { bookList: {books}, shoppingCart: {cartItems} } = state
  const book = books.find((book) => book.id = bookId);
  const itemIndex = cartItems.findIndex(({id}) => id === bookId);
  const item = cartItems[itemIndex];
  const newItem = updateCartItem(book, item, quantity)

  return {
    orderTotal: 0,
    cartItems: updateCartItems(cartItems, newItem, itemIndex)
  }
}

export default updateShoppingCart