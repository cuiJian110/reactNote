import { combineReducers } from 'redux-immutable'
import headerReducer from '../component/header/store/reducer'
const reducer = combineReducers({
    header: headerReducer
})
export default reducer;