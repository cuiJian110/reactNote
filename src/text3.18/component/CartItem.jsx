import React from 'react'
class CartItem extends React.Component {
    render() {
        const {item} = this.props;
        return (
            <div>
                <input
                type="checkBox" 
                checked={item.isChecked}
                onChange={(e) => this.handleStatusChange(e)}
                />
                name: <span>{item.name}</span>
                price: <span>{item.price}</span>
                num: <span>{item.num}</span>
                <button onClick={() => this.handleAddOne()}>+1</button>
                <button onClick={() => this.handleReduceOne()}>-1</button>
            </div>
        )
    }
    handleStatusChange = (e) => {
        const {item,changeStatus} = this.props;
        changeStatus(item.id, e.target.checked)
    }
    handleAddOne = () => {
        const {item,add,reduce} = this.props;
        add(item.id)
    }
    handleReduceOne = () => {
        const {item,add,reduce} = this.props;
        reduce(item.id)
    }
}
export default CartItem;