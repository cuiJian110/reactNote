import React from 'react'
import {connect} from 'react-redux'
class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            aaa: 'aa'
        }
    }
    render() {
        const {list,jiayi,jianyi,delyi,changeStatus,addItem,changeAllStatus} = this.props
        const total = this.getTotal()
        const lastId = this.getLastId() + 1 
        const num = this.getSelectedNum()
        const money = this.getMoney()
        const isAll = this.getIsAll()
        return (
            <div>
                <div>
                    <button onClick={() => addItem(lastId)}>addItem</button>
                    <input type="checkbox" checked={isAll} onChange={(e) => changeAllStatus(e)}/>
                </div>
                <div>
                    {list.map(i => (
                        <div key={i.get('id')}>
                            <input type="checkbox" checked={i.get('isChecked')} onChange={() => changeStatus(i.get('id'))}/>
                            name: {i.get('name')}
                            num: {i.get('num')}
                            price: {i.get('price')}
                            <button onClick={() => jiayi(i.get('id'))}>+1</button>
                            <button onClick={() => jianyi(i.get('id'))}>-1</button>
                            <button onClick={() => delyi(i.get('id'))}>del1</button>
                        </div>
                    ))}
                </div>
                <div>
                    total: {total}
                    num: {num}
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
    getMoney = () => {
        return this.props.list.reduce((p,i) => {
            if(i.get('isChecked')) {
                p += i.get('num') * i.get('price')
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
}
const mapState = state => ({
    test: state.getIn(['header','test']),
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
        const item = {id, name: `pingguo${id}`, num: 5, price: 10, isChecked: false}
        dispatch({item, type: 'addItem'})
    },
    changeAllStatus(e) {
        dispatch({flag: e.target.checked, type: 'changeAll'})
    } 
})
export default connect(mapState,mapDispatch)(Home)