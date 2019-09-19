// import { combineReducers } from 'redux-immutable'
// import headerReducer from '../component/header/store/reducer'
// const reducer = combineReducers({
//     header: headerReducer
// })
// export default reducer;


import {combineReducers} from 'redux-immutable'
import headerReducer from '../components/header/store/reducer'
const reducer = combineReducers({
    headerS: headerReducer
})
export default reducer
