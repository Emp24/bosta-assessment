import { combineReducers } from "redux";
import shipmentsReducer from "./modules/shipments/Reducer";
const rootReducer = combineReducers({
  shipmentDetails: shipmentsReducer,
});
export default rootReducer;
