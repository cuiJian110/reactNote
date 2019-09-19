// import {fromJS} from 'immutable'
const defaultState = {
    cartList: [
        {id: 1, name: '储值卡',price: 200, num: 2, isChecked: false},
        {id: 2, name: '增值卡',price: 100, num: 2, isChecked: false},
        {id: 3, name: '记账卡',price: 220, num: 2, isChecked: false},
        {id: 4, name: '信用卡',price: 120, num: 2, isChecked: false},
    ],
    total: 0,
    sumPrice: 0,
}
export default (state = defaultState, action) => {
    if(action.type === 'change_status') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.cartList.forEach(item => {
            if(item.id === action.id) {
                item.isChecked = action.value;
                
            }
        });
        let sum = 0;
        let sum_price = 0;
        newState.cartList.forEach(item => {
            if(item.isChecked) {
                sum++;
                sum_price += parseInt(item.num) * parseInt(item.price)
            }
        });
        newState.total = sum;
        newState.sumPrice = sum_price;
        return newState;
    }
    if(action.type === 'jia') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.cartList.forEach(item => {
            if(item.id === action.id) {
                item.num++;
            }
        });
        let sum = 0;
        let sum_price = 0;
        newState.cartList.forEach(item => {
            if(item.isChecked) {
                sum++;
                sum_price += parseInt(item.num) * parseInt(item.price)
            }
        });
        newState.total = sum;
        newState.sumPrice = sum_price;
        return newState;
    }
    if(action.type === 'jian') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.cartList.forEach(item => {
            if(item.id === action.id) {
                item.num--;
            }
        });
        let sum = 0;
        let sum_price = 0;
        newState.cartList.forEach(item => {
            if(item.isChecked) {
                sum++;
                sum_price += parseInt(item.num) * parseInt(item.price)
            }
        });
        newState.total = sum;
        newState.sumPrice = sum_price;
        return newState;
    }
    return state;
}