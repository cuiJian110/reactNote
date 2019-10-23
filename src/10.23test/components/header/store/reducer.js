import {fromJS,toJS} from 'immutable'
const defaultData = fromJS({
    test1: 'test1',
    list: [
        {id: 1, name: 'pingguo1', num: 5, price: 10, isChecked: false},
        {id: 2, name: 'pingguo2', num: 5, price: 10, isChecked: true},
        {id: 3, name: 'pingguo3', num: 5, price: 10, isChecked: false},
        {id: 4, name: 'pingguo4', num: 5, price: 10, isChecked: false},
    ]
})
export default (state = defaultData, actions) => {
    if(actions.type === 'jiayi') {
        const index = state.get('list').findIndex(i => i.get('id') === actions.id)
        const num = state.getIn(['list',index,'num']) + 1
        return state.setIn(['list',index,'num'], num)
    }
    if(actions.type === 'jianyi') {
        const index = state.get('list').findIndex(i => i.get('id') === actions.id)
        const num = state.getIn(['list',index,'num']) - 1
        return state.setIn(['list',index,'num'], num)
    }
    if(actions.type === 'delyi') {
        const index = state.get('list').findIndex(i => i.get('id') === actions.id)
        return state.deleteIn(['list',index])
    }
    if(actions.type === 'changeStatus') {
        const index = state.get('list').findIndex(i => i.get('id') === actions.id)
        const flag = !state.getIn(['list',index,'isChecked'])
        return state.setIn(['list',index, 'isChecked'], flag)
    }
    if(actions.type === 'addItem') {
        return state.update('list', item => item.push(fromJS(actions.value)))
    }
    if(actions.type === 'changeAll') {
        const stateFu = state.toJS() 
        stateFu.list.reduce((p,i) => {
            i.isChecked = actions.flag
        },0)
        return fromJS(stateFu)
    }
    return state
}