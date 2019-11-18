import React from 'react'
import {connect} from 'react-redux'
class Home extends React.Component {
    constructor() {
        super()
    }
    render() {
        const {test,list,jiayi,jianyi,delyi,changeStatus,addItem,changeAll} = this.props
        const total = this.getTotal()
        const lastId = this.getTotal() + 1
        const selectNum = this.getSelectedNum()
        const money = this.getSelectedMoney()
        const isAll = this.getIsAll()
        return (
            <div>
                {test}
                <div>
                    <button onClick={() => addItem(lastId)}>additem</button>
                    <input id='all' type="checkbox" checked={isAll} onChange={(e) => changeAll(e)}/>
                    <label htmlFor="all">全选</label>
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
                            <button onClick={() => delyi(item.get('id'))}>del1</button>
                        </div>
                    ))}
                </div>
                <div>
                    total: {total}
                    select: {selectNum}
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
    getSelectedNum = () => {
        return this.props.list.reduce((p,i) => {
            if(i.get('isChecked')) {
                p++
            }
            return p
        }, 0)
    }
    getIsAll = () => {
        if(this.getTotal() === this.getSelectedNum()) {
            return true
        } else {
            return false
        }
    }
    getSelectedMoney = () => {
        return this.props.list.reduce((p,i) => {
            if(i.get('isChecked')) {
                p += i.get('num') * i.get('price')
            }
            return p
        }, 0)
    }
}
const mapState = state => ({
    test: state.getIn(['header', 'test']),
    list: state.getIn(['header','list'])
})
const mapDispatch = dispatch => ({
    jiayi(id) {
        dispatch({id, type: 'jiayi'})
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
        dispatch({item: obj, type: 'addItem'})
    },
    changeAll(e) {
        dispatch({flag: e.target.checked, type: 'changeAll'})
    }
})
export default connect(mapState, mapDispatch)(Home)