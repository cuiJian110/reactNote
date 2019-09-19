import React from 'react'
import {connect} from 'react-redux'
import CartItem from './CartItem'
class CartList extends React.Component {
    render() {
        const {list,changeStatus,addOne,reduceOne,addProduct,handleDel} = this.props;
        const length =  this.getTotalProduct();
        const id = this.getLastProductId();
        const selelcted = this.getSelectProduct();
        const totalPrice = this.getTotalPrice();
        return (
            <div>
                <div>
                    {
                        list.map(item => (
                            <CartItem 
                            key={item.get('id')}
                            meiYiXiang={item}
                            change_status={changeStatus}
                            jia={addOne}
                            jian={reduceOne}
                            delItem={handleDel}
                            />
                        ))
                    }
                </div>
                <div>
                    <button onClick={() => addProduct(id+1)}>addProduct</button>
                </div>
                <div>
                    共有<span>{length}</span>件商品<br/>
                    选中<span>{selelcted}</span>件商品&nbsp;
                    共<span>{totalPrice}</span>元
                </div>
                {/* <button onClick={() => this.getTotalProduct()}>test</button> */}
            </div>
        )
    }
    getTotalProduct() {
        // console.log(this.props.list);
        // this.props.list.forEach(item => {
        //     console.log(item.get('name'))
        // })
        return this.props.list.size;
    }
    getSelectProduct() {
        let sum = 0;
        this.props.list.forEach(item => {
            if(item.get('isChecked')) {
                sum++;
            }
        })
        return sum;
    }
    getTotalPrice() {
        let total_Price = 0;
        this.props.list.forEach(item => {
            if(item.get('isChecked')) {
                total_Price += parseInt(item.get('num')) * parseInt(item.get('price'));
            }
        })
        return total_Price;
    }
    getLastProductId() {
        // console.log(this.props.list.getIn([3,'id']))
        return this.props.list.getIn([3,'id'])
    }
}
const mapStateToProps = state => ({
    list: state.get('cartList'),
})
const mapDispatchToProps = dispatch => ({
    changeStatus(id) {
        const action = {
            type: 'change',
            id,
        }
        dispatch(action);
    },
    addOne(id) {
        const action = {
            type: 'add',
            id,
        }
        dispatch(action);
    },
    reduceOne(id) {
        const action = {
            type: 'reduce',
            id,
        }
        dispatch(action);
    },
    addProduct(id) {
        console.log(id)
        // {id: 4, name: '信用卡',price: 120, num: 2, isChecked: false},
        const obj = {
            id,
            name: `信用卡${id}`,
            price: 120,
            num: 2,
            isChecked: false
        }
        const action = {
            type: 'addProduct',
            value: obj
        }
        dispatch(action);
    },
    handleDel(id) {
        const action = {
            type: 'del_item',
            id,
        }
        dispatch(action);
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(CartList);