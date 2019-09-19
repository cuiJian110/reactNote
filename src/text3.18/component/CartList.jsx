import React from 'react'
import {connect} from 'react-redux'
import CartItem from './CartItem'
class CartList extends React.Component {
    render() {
        const {list,total,sumPrice,jjj,jia,jian} = this.props;
        return (
            <div>
                {
                    list.map(item => (
                        <CartItem 
                        key={item.id}
                        item={item}
                        changeStatus={jjj}
                        add={jia}
                        reduce={jian}
                        />
                    ))
                }
                共选中<span>{total}</span>个商品 <br/>
                共<span>{sumPrice}</span>元
            </div>
        )
    }
}
const mapStateToProps = state => ({
    list: state.cartList,
    total: state.total,
    sumPrice: state.sumPrice,
})
const mapDispatchToProps = dispatch => ({
    jjj(id,value) {
        const action = {
            type: 'change_status',
            id, 
            value
        }
        dispatch(action);
    },
    jia(id) {
        const action = {
            type: 'jia',
            id
        }
        dispatch(action);
    },
    jian(id) {
        const action = {
            type: 'jian',
            id
        }
        dispatch(action);
    }

})
export default connect(mapStateToProps,mapDispatchToProps)(CartList);