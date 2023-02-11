import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createStore, applyMiddleware} from "redux";
import reducer from "./store/reducer.js";
import './index.css'
import {Provider} from 'react-redux'
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)
