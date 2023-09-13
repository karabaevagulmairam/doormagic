import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import {Context} from "./config/context/context";
import {SkeletonTheme} from "react-loading-skeleton";
import {Provider} from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <SkeletonTheme>
            <BrowserRouter>
                <Context>
                    <App />
                </Context>
            </BrowserRouter>
        </SkeletonTheme>
    </Provider>
);
