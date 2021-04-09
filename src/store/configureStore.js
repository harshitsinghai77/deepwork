import { applyMiddleware, compose, createStore } from "redux";
import reducers from "../reducers/reducers";
import thunk from "redux-thunk";

export default function configureStore() {
  const composeEnhancers =
    (window && window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
}
