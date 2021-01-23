import { combineReducers } from "redux";
import offersReducer from "./components/OfferList/redux";

const rootReducer = combineReducers({
    offers: offersReducer
});

export default rootReducer;