import {fromJS,toJS} from 'immutable'
const defaultState = fromJS({
    test1: 'test11',
    test2: 'test22',
    list: ['diyi','dier', 'disan']
})
export default (state = defaultState, action) => {
    if(action.type === 'changeT1') {
        return state.set('test1','newTest1')
    }
    if(action.type === 'changeT2') {
        return state.set('test2','newTest2')
    }
    if(action.type === 'changeT12') {
        // const obj = state.toJS()
        // obj.test1 = 'allnewTest1'
        // obj.test2 = 'allnewTest2'
        // obj.list = ['diyi11','dier', 'disan33']
        // return fromJS(obj)
        // return state.merge({
        //     test1: 'allnewTest1',
        //     test2: 'allnewTest2',
        //     list: ['diyi11','dier', 'disan33']
        // })
        const obj = state.set('test1','all1')
        const obj2 = obj.set('test2','all2')
        const obj3 = obj2.set('list',[1,2,3])
        return obj3
    }
    return state
}