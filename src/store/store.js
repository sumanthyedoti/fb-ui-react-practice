import {createStore, combineReducers, } from 'redux';
import {filterReducer, postReducer} from './reducers/reducers';

export const cheifReducer =  combineReducers({
  filter: filterReducer,
  posts: postReducer
})

export const store = createStore(cheifReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
