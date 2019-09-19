import React from 'react'
import {connect} from 'react-redux'
class Header extends React.Component {
    constructor() {
        super()
    }
    render() {
        const {test, list, isFocus, jujiao, shijiao, jiayi,jianyi, shanyi, qufan, addItem} = this.props
        const size = this.getTotal()
        const selected = this.getSelected()
        const money = this.getMoney()
        const lastId = this.getLastId()
        return (
            <div>
                <div>
                    <button onClick={() => this.props.add()}>add</button>
                    {test}
                    <input type="text" onFocus={() => jujiao()} onBlur={() => shijiao()}/>
                    {isFocus ? '聚焦啦' : '失去焦点啦'}
                </div>
                <div>
                    <button onClick={() => addItem(lastId)}>addItem</button>
                </div>
                <div>
                    {list.map(item => (
                        <div key={item.get('id')}>
                            <input type="checkbox" checked={item.get('isChecked')} onChange={() => qufan(item.get('id'))}/>
                            name: {item.get('name')}
                            num: {item.get('num')}
                            price: {item.get('price')}
                            <button onClick={() => jiayi(item.get('id'))}>+1</button>
                            <button onClick={() => jianyi(item.get('id'))}>-1</button>
                            <button onClick={() => shanyi(item.get('id'))}>shanchu 1</button>
                        </div>
                    ))}
                </div>
                <div>
                    total: {size}
                    selected: {selected}
                    money: {money}
                </div>
            </div>
        )
    }
    getTotal = () => {
        return this.props.list.size
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
    getLastId = () => {
        return this.props.list.getIn([this.getTotal() - 1, 'id'])
    }
}
const mapStateToProps = state => ({
    test: state.getIn(['headerS','value']),
    isFocus: state.getIn(['headerS', 'isFocus']),
    list: state.getIn(['headerS','cartList'])
})
const mapActionsToProps = dispatch => ({
    add() {
        const action = {
            type: 'add'
        }
        dispatch(action)
    },
    jujiao() {
        const action = {type: 'jujiao'}
        dispatch(action)
    },
    shijiao() {
        const action = {type: 'shijiao'}
        dispatch(action)
    },
    jiayi(id) {
        // console.log(id)
        const action = {type: 'jiayi', id: id}
        dispatch(action)
    },
    jianyi(id) {
        const action = {type: 'jianyi', id}
        dispatch(action)
    },
    shanyi(id) {
        const action = {type: 'shanyi', id}
        dispatch(action)
    },
    qufan(id) {
        const action = {type: 'qufan', id}
        dispatch(action)
    },
    addItem(lastId) {
        const id = lastId + 1
        console.log(id)
    }
})
export default connect(mapStateToProps, mapActionsToProps)(Header)