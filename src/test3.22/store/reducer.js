const defaultState = {
    cartList: [
        {id: 1, name: '储值卡',price: 200, num: 2, isChecked: false},
        // {id: 2, name: '增值卡',price: 100, num: 2, isChecked: true},
        // {id: 3, name: '记账卡',price: 220, num: 2, isChecked: false},
        // {id: 4, name: '信用卡',price: 120, num: 2, isChecked: false},
    ],
}
export default (state = defaultState, action) => {
    if(action.type === 'init') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.cartList = action.value;
        return newState;
    }
    if(action.type === 'change') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.cartList.forEach(item => {
            if(item.id === action.id) {
                item.isChecked = !item.isChecked;
            }
        })
        return newState;
    }
    if(action.type === 'change_all') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.cartList.forEach(item => {
            item.isChecked = action.value;
        })
        return newState;
    }
    if(action.type === 'add') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.cartList.forEach(item => {
            if(item.id === action.id) {
                item.num++;
            }
        })
        return newState;
    }
    if(action.type === 'reduce') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.cartList.forEach(item => {
            if(item.id === action.id) {
                item.num--;
            }
        })
        return newState;
    }
    if(action.type === 'del_item') {
        const newState = JSON.parse(JSON.stringify(state));
        let i = 0;
        newState.cartList.forEach((item,index) => {
            if(item.id === action.id) {
                i = index;
            }
        })
        newState.cartList.splice(i,1);
        return newState;
    }
    if(action.type === 'addProduct') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.cartList.push(action.value)
        return newState;
    }
    return state;
}