import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';

import App from './components/app/App';
import ErrorBoundry from "./components/error-boundry/ErrorBoundry";
import CommonService from "./services/common-service";
import { CommonProvider} from "./components/context/Context";

import store from './store';

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

