const defaultState = {
    initValue: '555',
    list: ['111','222']
}
export default (state = defaultState, action) => {
    if(action.type === 'change_value') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.initValue = action.value;
        return newState;
    }
    else if(action.type === 'add_item') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = [newState.initValue, ...newState.list];
        newState.initValue = '';
        return newState;
    }
    else if(action.type === 'del_item') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    return state;
}