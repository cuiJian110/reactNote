import React from 'react'
import {connect} from 'react-redux'
class Home extends React.Component {
    constructor() {
        super()
    }
    render() {
        const {list,jiayi,jianyi,delyi,changeStatus,addItem,changeAllStatus} = this.props
        const total = this.getTotal()
        const lastId = this.getLastId() + 1
        const selectedNum = this.getSelectedNum()
        const money = this.getSelectedMoney()
        const isAll = this.getIsAllChecked()
        return (
            <div>
                <div>
                    <button onClick={() => addItem(lastId)}>addItem</button>
                    <input id='j1' type="checkbox" checked={isAll} onChange={(e) => changeAllStatus(e)}/>
                    <label htmlFor="j1">全选</label>
                </div>
                <div>
                    {list.map(item => (
                        <div key={item.get('id')}>
                            <input type="checkbox" checked={item.get('isChecked')} onChange={() => changeStatus(item.get('id'))}/>
                            name: {item.get('name')}
                            num: {item.get('num')}
                            price: {item.get('price')}
                            <button onClick={() => jiayi(item.get('id'))}>+1</button>
                            <button onClick={() => jianyi(item.get('id'))}>-1</button>
                            <button onClick={() => delyi(item.get('id'))}>del_1</button>
                        </div>
                    ))}
                </div>
                <div>
                    共有{total}个
                    选中了{selectedNum}个
                    共{money}￥
                </div>
            </div>
        )
    }
    getTotal = () => {
        return this.props.list.size
    }
    getLastId = () => {
        return this.props.list.getIn([this.getTotal() - 1, 'id'])
    }
    getIsAllChecked = () => {
        if(this.getTotal() === this.getSelectedNum()) {
            return true
        } else {
            return false
        }
    }
    getSelectedNum = () => {
        return this.props.list.reduce((p, i) => {
            if(i.get('isChecked')) {
                p++
            }
            return p
        },0)
    }
    getSelectedMoney = () => {
        return this.props.list.reduce((p, i) => {
            if(i.get('isChecked')) {
                p += i.get('num') * i.get('price')
            }
            return p
        }, 0)
    }
}
const mapState = state => ({
    test: state.getIn(['header', 'test1']),
    list: state.getIn(['header','list'])
})
const mapDispatch = dispatch => ({
    jiayi(id) {
        const action = {id, type: 'jiayi'}
        dispatch(action)
    },
    jianyi(id) {
        dispatch({id, type: 'jianyi'})
    },
    delyi(id) {
        dispatch({id, type: 'delyi'})
    },
    changeStatus(id) {
        dispatch({id, type: 'changeStatus'})
    },
    addItem(id) {
        const obj = {id, name: `pingguo${id}`, num: 5, price: 10, isChecked: false}
        dispatch({value: obj,type: 'addItem'})
    },
    changeAllStatus(e) {
        dispatch({flag: e.target.checked, type: 'changeAll'})
    }
})
export default connect(mapState, mapDispatch)(Home)