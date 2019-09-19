import React from 'react'
import store from '../store'
import * as getAction from '../store/actionCreate'
import axios from 'axios'
class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        console.log(store)
        this.state = store.getState()
        store.subscribe(() => this.handleStoreChanged())
    }
    render() {
        return (
            <div>
                <div>
                    <input type="text" 
                    value={this.state.defaultValue}
                    onChange={(e) => this.handleChange(e)}
                    />
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
        // console.log('666')
        // axios.get('api/data.json').then(res => {
        //     console.log(res)
        //     const value = res.data.data;
        //     const action = getAction.getInitDataAction(value);
        //     store.dispatch(action);
        // })
        const action = getAction.getInitItemAction()
        store.dispatch(action);
    }
    handleStoreChanged() {
        this.setState(store.getState())
    }
    handleChange(e) {
        // console.log(e.target.value)
        // const action = {
        //     type: 'change',
        //     value: e.target.value
        // }
        const action = getAction.getChangeAction(e.target.value)
        store.dispatch(action);
    }
    handleAdd() {
        // const action = {
        //     type: 'add'
        // }
        const action = getAction.getAddAction()
        store.dispatch(action)
    }
    handleDel(i) {
        // const action = {
        //     type: 'del_',
        //     index: i,
        // }
        const action = getAction.getDelAction(i);
        store.dispatch(action);
    }
}
export default ToDoList;