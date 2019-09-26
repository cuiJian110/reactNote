import React from 'react'
import {connect} from 'react-redux'
class Header extends React.Component {
    constructor() {
        super()
    }
    render() {
        const {list, changeStatus,jiayi,jianyi,delyi,addItem, changeAll} = this.props
        const total = this.getTotal()
        const lastId = this.getLastId()
        const isAll = this.getIsAll()
        const selected = this.getSelected()
        const money = this.getMoney()
        return (
            <div>
                <div>
                    <button onClick={() => addItem(lastId+1)}>addItem</button>
                    <label htmlFor="all">
                        <input type="checkbox" checked={isAll} onChange={(e) => changeAll(e)} id='all'/>全选
                    </label>
                </div>
                {
                    list.map(item => (
                        <div key={item.get('id')}>
                            <input type="checkbox" checked={item.get('isChecked')} onChange={() => changeStatus(item.get('id'))}/>
                            name: {item.get('name')}
                            num: {item.get('num')}
                            price: {item.get('price')}
                            <button onClick={() => jiayi(item.get('id'))}>+1</button>
                            <button onClick={() => jianyi(item.get('id'))}>-1</button>
                            <button onClick={() => delyi(item.get('id'))}>del 1</button>
                        </div>
                    ))
                }
                <div>
                    total: {total}
                    selected: {selected}
                    money: {money}
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
    getSelected = () => {
        return this.props.list.reduce((p,i) => {
            if(i.get('isChecked')) {
                p++
            }
            return p
        }, 0)
    }
    getMoney = () => {
        return this.props.list.reduce((p,i) => {
            if(i.get('isChecked')) {
                p += i.get('num') * i.get('price')
            }
            return p
        }, 0)
    }
    getIsAll = () => {
        if(this.getTotal() === this.getSelected()) {
            return true
        } else {
            return false
        }
    }
}
const mapState = state => ({
    list: state.getIn(['headers','list'])
})
const mapDispacch = dispatch => ({
    changeStatus(id) {
        const action = {type: 'changeStatus', id}
        dispatch(action)
    },
    jiayi(id) {
        const action = {type: 'jiayi', id}
        dispatch(action)
    },
    jianyi(id) {
        const action = {type: 'jianyi', id}
        dispatch(action)
    },
    delyi(id) {
        const action = {type: 'delyi', id}
        dispatch(action)
    },
    addItem(id) {
        const obj = {id, name: `pingguo${id}`, num: 5, price: 10, isChecked: false}
        const action = {type: 'addItem', obj}
        dispatch(action)
    },
    changeAll(e) {
        const action = {type: 'changeAll', flag: e.target.checked}
        dispatch(action)
    }
})
export default connect(mapState,mapDispacch)(Header)