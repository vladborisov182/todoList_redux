import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import allReducers from './reducers'
import App from './components/App'
  
const store = createStore(allReducers);

const destination = document.querySelector(".app");

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    destination
);