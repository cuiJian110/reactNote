
import {combineReducers} from 'redux-immutable'
import HeaderReducer from '../component/header3.15/store/reducer'
const reducer = combineReducers({
    header: HeaderReducer
})
export default reducer;