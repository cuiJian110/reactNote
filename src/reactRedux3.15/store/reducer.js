const defaultState = {
    defaultValue: '666',
    list: ['111','222']
}

export default (state = defaultState, action) => {
    if(action.type === 'change') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.defaultValue = action.value;
        return newState;
    }
    if(action.type === 'add') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = [newState.defaultValue, ...newState.list];
        newState.defaultValue = '';
        return newState;
    }
    if(action.type === 'del_') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    if(action.type === 'init_data') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.value;
        return newState;
    }
    return state;
}