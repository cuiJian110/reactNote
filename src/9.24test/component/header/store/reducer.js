import {fromJS, toJS} from 'immutable'
const defaultState = fromJS({
    testValue: 'testvalue',
    list: [
        {id: 1, name: 'pingguo1', num: 5, price: 10, isChecked: false},
        {id: 2, name: 'pingguo2', num: 5, price: 10, isChecked: true},
        {id: 3, name: 'pingguo3', num: 5, price: 10, isChecked: false},
        {id: 4, name: 'pingguo4', num: 5, price: 10, isChecked: false},
    ]
})
export default (state = defaultState, action) => {
    if(action.type === 'changeStatus') {
        const index = state.get('list').findIndex(i => i.get('id') === action.id)
        const flag = !state.getIn(['list',index,'isChecked'])
        return state.setIn(['list',index,'isChecked'],flag)
    }
    if(action.type === 'jiayi') {
        const index = state.get('list').findIndex(i => i.get('id') === action.id)
        const flag = state.getIn(['list',index,'num']) + 1
        return state.setIn(['list',index,'num'],flag)
    }
    if(action.type === 'jianyi') {
        const index = state.get('list').findIndex(i => i.get('id') === action.id)
        const flag = state.getIn(['list',index,'num']) - 1
        return state.setIn(['list',index,'num'],flag)
    }
    if(action.type === 'delyi') {
        const index = state.get('list').findIndex(i => i.get('id') === action.id)
        return state.deleteIn(['list',index])
    }
    if(action.type === 'addItem') {
        return state.update('list',item => item.push(fromJS(action.obj)))
    }
    if(action.type === 'changeAll') {
        const statefu = state.toJS()
        statefu.list.forEach(item => {
            item.isChecked = action.flag
        })
        return fromJS(statefu)
    }
    return state
}