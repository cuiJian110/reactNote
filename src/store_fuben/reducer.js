import {combineReducers} from 'redux-immutable'
import bodyReducer from '../component/body/store/reducer'
const reducer = combineReducers({
    body: bodyReducer
})
export default reducer;