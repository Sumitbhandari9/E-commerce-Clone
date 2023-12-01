import React from "react";
import {configureStore} from '@reduxjs/toolkit'
import ProductReducer from '../Reducer/Reducer.js';


const appStore = configureStore({

    reducer:{
        gProducts:ProductReducer,
    }

})
export default appStore;