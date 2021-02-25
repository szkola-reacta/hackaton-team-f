import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import userReducer from "./utils/createSlice";
import rootReducer from "./rootReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

const store = createStore(rootReducer,
configureStore({
    reducer:{
        user: userReducer
    }
}),
 composeEnhancers(
  applyMiddleware(...middleware)
));

// export default configureStore({
//     reducer:{
//         user: userReducer,
//         rootReducer
//     }
// });
export default store;