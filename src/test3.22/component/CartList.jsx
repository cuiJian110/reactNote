import React from 'react'
import {connect} from 'react-redux'
import CartItem from './CartItem'
import axios from 'axios'
class CartList extends React.Component {
    render() {
        const {cartList,change_status,handleJia,handleJian,handleDel,handleAddProduct,handleChangeAll} = this.props;
        const total = this.getTotalSum();
        const isAllSelected = this.getIsAllSelected()
        const lastId = this.getLastProductId();
        const selectedSum = this.getSelected();
        const totalMoney = this.getTotalMoney()
        return (
            <div>
                <div>
                    {
                        cartList.map(item => (
                            <CartItem 
                            key={item.id}
                            item_={item}
                            id={item.id}
                            changeStatus={change_status}
                            addYi={handleJia}
                            reduceYi={handleJian}
                            delById={handleDel}
                            />
                        ))
                    }
                </div>
                <div>
                    <button onClick={() => handleAddProduct(lastId+1)}>addProduct</button>
                </div>
                <div>
                    全选<input type="checkBox" 
                    checked={isAllSelected}
                    onChange={(e) => handleChangeAll(e)}
                    />
                    共有<span>{total}</span>件商品<br/>
                    选中<span>{selectedSum}</span>件商品 
                    共<span>{totalMoney}</span>元
                </div>
            </div>
        )
    }
    async componentDidMount() {
        const {data: {data}} = await axios.get('api/data.json');
        this.props.handleInit(data);
        
    }
    getTotalSum() {
        return this.props.cartList.length;
    }
    getIsAllSelected() {
        let i = 0;
        this.props.cartList.forEach(item => {
            if(item.isChecked) {
                i++;
            }
        })
        if(i === this.getTotalSum()) {
            return true;
        } else {
            return false;
        }
    }
    getLastProductId() {
        return this.props.cartList[this.props.cartList.length - 1].id
    }
    getSelected() {
        let sum = 0;
        this.props.cartList.forEach(item => {
            if(item.isChecked) {
                sum++;
            }
        })
        return sum;
    }
    getTotalMoney() {
        let sum = 0;
        this.props.cartList.forEach(item => {
            if(item.isChecked) {
                sum += parseInt(item.num) * parseInt(item.price);
            }
        })
        return sum;
    }

}
const mapStateToProps = state => ({
    cartList: state.cartList,
})
const mapDispatchToProps = dispatch => ({
    handleInit(data) {
        const action = {
            type: 'init',
            value: data,
        }
        dispatch(action);
    },
    change_status(id) {
        const action = {
            type: 'change',
            id,
        }
        dispatch(action);
    },
    handleJia(id) {
        const action = {
            type: 'add',
            id,
        }
        dispatch(action);
    },
    handleJian(id) {
        const action = {
            type: 'reduce',
            id,
        }
        dispatch(action);
    },
    handleDel(id) {
        const action = {
            type: 'del_item',
            id,
        }
        dispatch(action);
    },
    handleAddProduct(id) {
        // {id: 3, name: '记账卡',price: 220, num: 2, isChecked: false},
        const obj = {
            id: id,
            name: `记账卡${id}`,
            price: 220, 
            num: 2, 
            isChecked: false
        }
        const action = {
            type: 'addProduct',
            value: obj,
        }
        dispatch(action);
    },
    handleChangeAll(e) {
        const action = {
            type: 'change_all',
            value: e.target.checked,
        }
        dispatch(action)
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(CartList);