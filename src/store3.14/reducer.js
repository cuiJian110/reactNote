import {combineReducers} from 'redux-immutable'
import headerReducer from '../component/header3.14/store/reducer'
const reducer = combineReducers({
    header: headerReducer,
})
export default reducer;