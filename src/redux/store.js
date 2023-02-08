import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {carReducer} from "./slice/carSlice";

const rootReducer = combineReducers ({
    cars:carReducer
})

const setupStore = () => configureStore({
    reducer:rootReducer
})

export {
    setupStore
}


