import React from 'react'
class CartItem extends React.Component {
    render() {
        const {meiYiXiang,change_status,jia,jian,delItem} = this.props;
        return (
            <div>
                <input type="checkBox" 
                checked={meiYiXiang.get('isChecked')}
                onChange={() => change_status(meiYiXiang.get('id'))}
                />
                name: <span>{meiYiXiang.get('name')}</span>
                price: <span>{meiYiXiang.get('price')}</span>
                num: <span>{meiYiXiang.get('num')}</span>
                <button onClick={() => jia(meiYiXiang.get('id'))}>num+1</button>
                <button onClick={() => jian(meiYiXiang.get('id'))}>num-1</button>
                <button onClick={() => delItem(meiYiXiang.get('id'))}>delProduct</button>
            </div>
        )
    }
}
export default CartItem;