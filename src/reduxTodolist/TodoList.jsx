import React from 'react'
import store from './store'
import * as getAction from './store/actionCreator'
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        // console.log(store);
        this.state = store.getState()
        store.subscribe(() => this.handleStoreChange())
    }
    render() {
        return (
            <div>
                <div>
                    <input type="text" value={this.state.defaultValue} onChange={(e) => this.handleChange(e)}/>
                    <button onClick={() => this.handleAdd()}>commit</button>
                </div>
                <div>
                    {
                        this.state.list.map((item,index) => (
                            <div key={index} onClick={() => this.handleDel(index)}>{item}</div>
                        ))
                    }
                </div>
            </div>
        )
    }
    componentDidMount() {
        // axios.get('api/data.json').then(res => {
        //     console.log(res)
        //     const {data} = res;
        //     const action = getAction.getInitData(data.data);
        //     store.dispatch(action);
        // })
        const action = getAction.getInitDataAction();
        store.dispatch(action)
    }
    handleStoreChange() {
        this.setState(store.getState())
    }
    handleChange(e) {
        // const action = {
        //     type: 'input_change',
        //     value: e.target.value,
        // }
        const action = getAction.getInputChange(e.target.value);
        store.dispatch(action);
    }
    handleAdd() {
        // const action = {
        //     type: 'add_item'
        // }
        const action = getAction.getAddItem();
        store.dispatch(action);
    }
    handleDel(index) {
        // const action = {
        //     type: 'del_item',
        //     index,
        // }
        const action = getAction.getDelItem(index);
        store.dispatch(action);
    }
}
export default TodoList;