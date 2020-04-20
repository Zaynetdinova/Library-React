import React,{Component} from "react";
import { connect } from 'react-redux';

import compose from "../../../../utils";
import { fetchBooks, bookAddedToCart, bookDecreaseToCart} from '../../../../actions';
import WithCommonService from "../../../hoc/WithCommonService";
import ListItem from "../ListItem/ListItem";
import Spinner from "../../../spinner/Spinner";
import ErrorIndicator from "../../../error-indicator/ErrorIndicator";

// Презентационные компоненты отвечают только за рендеринг
const  List = ({ books, onAddedToCart, bookDecreaseToCart}) => {
  console.log(books)
  return (
    <div>
      <ul>
        {
          books.map((book, index) => {
            return (
              <li key={index}>
                <ListItem book={book}/>
              </li>
            )
          })
        }
      </ul>

      <button onClick={() => onAddedToCart()}>ADDD</button>
      <button onClick={() => bookDecreaseToCart()}>decrease</button>
    </div>

  )
}

// Компоненты контейнеры - работаю с Redux, реализуют loading, error  и тд
 class ItemContainer extends Component{

  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchBooks()
    }

   render() {
    const {books, loading, error, cartItems,  onAddedToCart, bookDecreaseToCart} = this.props;
    console.log(cartItems)
    if ( loading ) {
      return <Spinner/>
    }

    if (error) {
      return  <ErrorIndicator/>
    }

    return  <List books={books} onAddedToCart={onAddedToCart} bookDecreaseToCart={bookDecreaseToCart}/>
  }
}

// Эта функция определяет , какие свойства получит компонент из REDUX
const mapStateToProps = ({bookList: {books, loading, error}, shoppingCart: {cartItems}}) => {
   return {
     books,
     loading,
     error,
     cartItems
   }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     booksLoaded: (newBooks) => {
//       dispatch(booksLoaded(newBooks))
//     }
//   }
// }

// const mapDispatchToProps = {
//     booksLoaded,
//     booksRequested,
//     booksError
// }

const mapDispatchToProps = (dispatch, ownProps) => {
  const { CommonService } = ownProps
  return {
    fetchBooks: fetchBooks(CommonService, dispatch),
    onAddedToCart: () => dispatch(bookAddedToCart(1)),
    bookDecreaseToCart: () => dispatch(bookDecreaseToCart(1))
  }
}

export default compose (
  WithCommonService(),
  connect(mapStateToProps, mapDispatchToProps)
)(ItemContainer)

// export default WithCommonService()
//                 (connect(mapStateToProps, mapDispatchToProps)(Item))

