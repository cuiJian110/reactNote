import {fromJS, toJS} from 'immutable'
const defaultState = fromJS({
    test: 'kkkk',
    list: [
        {id: 1, name: 'pingguo1', num: 5, price: 10, isChecked: false},
        {id: 2, name: 'pingguo2', num: 5, price: 10, isChecked: true},
        {id: 3, name: 'pingguo3', num: 5, price: 10, isChecked: false},
        {id: 4, name: 'pingguo4', num: 5, price: 10, isChecked: false},
    ]
})
export default (state = defaultState, action) => {
    if(action.type === 'jiayi') {
        const i = state.get('list').findIndex(i => i.get('id') === action.id)
        const num = state.getIn(['list',i,'num']) + 1
        return state.setIn(['list',i,'num'],num)
    }
    if(action.type === 'jianyi') {
        const i = state.get('list').findIndex(i => i.get('id') === action.id)
        const num = state.getIn(['list',i,'num']) - 1
        return state.setIn(['list',i,'num'],num)
    }
    if(action.type === 'delyi') {
        const i = state.get('list').findIndex(i => i.get('id') === action.id)
        return state.deleteIn(['list',i])
    }
    if(action.type === 'changeStatus') {
        const i = state.get('list').findIndex(i => i.get('id') === action.id)
        const flag = !state.getIn(['list',i,'isChecked'])
        return state.setIn(['list',i,'isChecked'],flag)
    }
    if(action.type === 'addItem') {
        return state.update('list', item => item.push(fromJS(action.item)))
        // console.log(state.get('list'))
        // return state.get('list').append(fromJS(action.item))
    }
    if(action.type === 'changeAll') {
        const obj = state.toJS()
        obj.list.reduce((p,i) => i.isChecked = action.flag, 0)
        return fromJS(obj)
    }
    return state
}