import { combineReducers } from "redux";
import offersReducer from "./components/OfferList/redux";
import usersReducer from "./components/LoginForm/redux";
const rootReducer = combineReducers({
    offers: offersReducer,
    users: usersReducer
});

export default rootReducer;