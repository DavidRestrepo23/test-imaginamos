import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import ServiceReducer from './reducers/ServiceReducer';

const rootReducer = combineReducers({
    ServiceReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));