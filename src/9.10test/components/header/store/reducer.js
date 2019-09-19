import {fromJS,toJS} from 'immutable'
const defaultState = fromJS({
    value: 11,
    isFocus: false,
    cartList: [
        {id: 1, name: 'pingguo1', num: 5, price: 10, isChecked: false},
        {id: 2, name: 'pingguo2', num: 5, price: 10, isChecked: true},
        {id: 3, name: 'pingguo3', num: 5, price: 10, isChecked: false},
        {id: 4, name: 'pingguo4', num: 5, price: 10, isChecked: false},
    ]
})
export default (state = defaultState, actions) => {
    if(actions.type === 'add') {
        const num = state.get('value') + 1
        return state.set('value',num)
    }
    if(actions.type === 'jujiao') {
        return state.set('isFocus', true)
    }
    if(actions.type === 'shijiao') {
        return state.set('isFocus', false)
    }
    if(actions.type === 'jiayi') {
        let i = 0
        let num = 0
        // const valueJS = state.toJS()
        // console.log(valueJS)
        // return fromJS(valueJS)
        state.get('cartList').forEach((item, index) => {
            if(item.get('id') === actions.id) {
                i = index
                num = item.get('num') + 1
            }
        })
        return state.setIn(['cartList',i, 'num'], num)
    }
    if(actions.type === 'jianyi') {
        let i = 0
        let num = 0
        state.get('cartList').forEach((item,index) => {
            if(item.get('id') === actions.id) {
                i = index
                num = item.get('num') - 1
            }
        })
        return state.setIn(['cartList',i,'num'],num)
    }
    if(actions.type === 'shanyi') {
        let i = 0
        state.get('cartList').forEach((item, index) => {
            if(item.get('id') === actions.id) {
                i = index
            }
        })
        return state.deleteIn(['cartList',i])
    }
    if(actions.type === 'qufan') {
        let i = 0
        let flag = false
        state.get('cartList').forEach((item, index) => {
            if(item.get('id') === actions.id) {
                i = index
                flag = !item.get('isChecked')
            }
        })
        return state.setIn(['cartList',i,'isChecked'],flag)
    }
    return state
}