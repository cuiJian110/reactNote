import {combineReducers} from 'redux-immutable'
import headerReducer from '../component/header/store/reducer'
const reduce = combineReducers({
    headers: headerReducer
})
export default reduce