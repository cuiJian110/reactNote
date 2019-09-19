
import {fromJS} from 'immutable'
const ds = fromJS({
    focus: false,
})
export default (state = ds, action) => {
    if(action.type === 'jj') {
        return state.set('focus',true)
    }
    if(action.type === 'sj') {
        return state.set('focus',false)
    }
    return state;
}