const ds = {
    dv: '666',
    list: ['555','999']
}

export default (state = ds, action) => {
    if(action.type === 'change') {
        const newS = JSON.parse(JSON.stringify(state));
        newS.dv = action.value;
        return newS;
    }
    if(action.type === 'add') {
        const newS = JSON.parse(JSON.stringify(state));
        newS.list = [newS.dv, ...newS.list];
        newS.dv = '';
        return newS;
    }
    if(action.type === 'del_') {
        const newS = JSON.parse(JSON.stringify(state));
        newS.list.splice(action.index,1);
        return newS;
    }
    return state;
}