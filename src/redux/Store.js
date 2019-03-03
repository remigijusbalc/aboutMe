import { Platform } from "react-native";
import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import devTools from "remote-redux-devtools";
import RootReducer from "./reducers";
import thunk from "redux-thunk";
import promise from "redux-promise";

const ignoredActions = [];
const ignoredRegxp = new RegExp(ignoredActions.join("|", "i"));

const logger = createLogger({
    predicate: (getState, action) => ignoredRegxp.test(action.type) === false,
    collapsed: (getState, action, logEntry) => !logEntry.error
});

const optionalLogger = __DEV__ ? [logger, thunk, promise] : [thunk, promise];
const middleware = applyMiddleware(...optionalLogger);

const composeStore = __DEV__
    ? [
        middleware,
        devTools({
            name: Platform.OS,
            hostname: "localhost",
            port: 5678
        })
    ] : [middleware];
const Store = createStore(RootReducer, compose(...composeStore));
export default Store; 
