import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import {Context} from "./config/context/context";
import {SkeletonTheme} from "react-loading-skeleton";
import {Provider} from "react-redux";

import {store} from "./redux";

ReactDOM.createRoot(document.getElementById('root')).render(
    <SkeletonTheme>
        <BrowserRouter>
            <Context>
                <Provider store={store}>
                    <App />
                </Provider>
            </Context>
        </BrowserRouter>
    </SkeletonTheme>
);
