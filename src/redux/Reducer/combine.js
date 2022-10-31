import {combineReducers} from 'redux';
import { nameReducer } from './nameReducer';
const reducers=combineReducers({
    nameList:nameReducer,
})

export default reducers