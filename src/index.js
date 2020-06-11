import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';

import App from './components/App/App';
import ErrorBoundry from "./components/Common-components/error-boundry/ErrorBoundry";
import CommonService from "./services/common-service";
import { CommonProvider} from "./components/context/Context";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import store from './Redux/store';

import './index.scss';


const commonService = new CommonService()

ReactDOM.render(
  // Предоставляет доступ к Redux store
  <Provider store={store}>
     {/*Обработка ошибок в компонентах и ниже*/}
    <ErrorBoundry>
      {/*Передает сервис через ContextApi*/}
      <CommonProvider value={commonService}>
        <Router>
          <App/>
        </Router>
      </CommonProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
)

