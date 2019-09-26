import {combineReducers} from 'redux-immutable'
import headersReducer from '../component/header/store/reducer'
const reducer = combineReducers({
    headers: headersReducer
})
export default reducer