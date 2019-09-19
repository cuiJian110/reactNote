import React from 'react'
class CartItem extends React.Component {
    render() {
        const {item_,id,changeStatus,addYi,reduceYi,delById} = this.props;
        return (
            <div>
                <input 
                type="checkBox" 
                checked={item_.isChecked}
                onChange={() => changeStatus(id)}
                />
                name: <span>{item_.name}</span>
                price: <span>{item_.price}</span>
                num: <span>{item_.num}</span>
                <button onClick={() => addYi(id)}>+1</button>
                <button onClick={() => reduceYi(id)}>-1</button>
                <button onClick={() => delById(id)}>del</button>
            </div>
        )
    }
}
export default CartItem;