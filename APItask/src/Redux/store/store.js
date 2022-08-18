// import {reducer} from "../reducer"
// import {applyMiddleware, combineReducers, Legacy_createStore as createStore} from "reducer"
// import thunk from "redux-thunk";

// const rootReducer = combineReducers({
//     reducer:reducer
// })

// const store = createStore(rootReducer,applyMiddleware(thunk))

// export default store;


import { configureStore } from "@reduxjs/toolkit";
import userListReducer from "../reducer/reducer";

const store = configureStore({
    reducer:{
        userListReducer,
    },
});
export default store;