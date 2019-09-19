import {fromJS} from 'immutable'
const defaultState = fromJS({
    cartList: [
        {id: 1, name: '储值卡',price: 200, num: 2, isChecked: false},
        {id: 2, name: '增值卡',price: 100, num: 2, isChecked: true},
        {id: 3, name: '记账卡',price: 220, num: 2, isChecked: false},
        {id: 4, name: '信用卡',price: 120, num: 2, isChecked: false},
    ]
})
export default (state = defaultState, action) => {
    if(action.type === 'change') {
        let i = 0;
        let flag = true;
        state.get('cartList').forEach((item,index) => {
            if(item.get('id') === action.id) {
                i = index;
                flag = !item.get('isChecked');
            }
        });
        return state.setIn(['cartList', i, 'isChecked'],flag);
        // return state;
        // const newState = JSON.parse(JSON.stringify(state));
        // newState.cartList.forEach(item => {
        //     if(item.id === action.id) {
        //         item.isChecked = !item.isChecked;
        //     }
        // })
        // return newState;
    }
    if(action.type === 'add') {
        let i = 0;
        let num_ = 0;
        state.get('cartList').forEach((item,index) => {
            if(item.get('id') === action.id) {
                i = index;
                num_ = item.get('num');
            }
        })
        return state.setIn(['cartList',i,'num'],++num_)
        // const newState = JSON.parse(JSON.stringify(state));
        // newState.cartList.forEach(item => {
        //     if(item.id === action.id) {
        //         item.num++;
        //     }
        // })
        // return newState;
    }
    if(action.type === 'reduce') {
        let i = 0;
        let num_ = 0;
        state.get('cartList').forEach((item,index) => {
            if(item.get('id') === action.id) {
                i = index;
                num_ = item.get('num');
            }
        })
        return state.setIn(['cartList',i,'num'],--num_)
        // const newState = JSON.parse(JSON.stringify(state));
        // newState.cartList.forEach(item => {
        //     if(item.id === action.id) {
        //         item.num--;
        //     }
        // })
        // return newState;
    }
    if(action.type === 'addProduct') {
        const arr = JSON.parse(JSON.stringify(state.get('cartList')))
        arr.push(action.value)
        return state = fromJS(arr)
        // const obj = fromJS(action.value)
        // return state.get('cartList').push(obj)
        // return state.get('cartList').push(action.value)
        // const newState = JSON.parse(JSON.stringify(state));
        // newState.cartList.push(action.value)
        // return newState;
    }
    if(action.type === 'del_item') {
        let i = 0;
        state.get('cartList').forEach((item,index) => {
            if(item.get('id') === action.id) {
                i = index;
            }
        })
        return state.deleteIn(['cartList',i])
        // const newState = JSON.parse(JSON.stringify(state));
        // let i = 0;
        // newState.cartList.forEach((item,index) => {
        //     if(item.id === action.id) {
        //         i = index;
        //     }
        // })
        // newState.cartList.splice(i,1);
        // return newState;
    }
    return state;
}