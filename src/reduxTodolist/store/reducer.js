import * as type from './typeCreator'
const defaultState = {
    defaultValue: '000',
    list: ['111','222'],
}
export default (state = defaultState,action) => {
    if(action.type === type.INPUT_CHANGE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.defaultValue = action.value;
        return newState;
    }
    else if(action.type === type.ADD_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = [newState.defaultValue,...newState.list];
        newState.defaultValue = '';
        return newState;
    }
    else if(action.type === type.DEL_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1)
        return newState;
    }
    else if(action.type === type.INIT_DATA) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.value;
        return newState;
    }
    return state;
}