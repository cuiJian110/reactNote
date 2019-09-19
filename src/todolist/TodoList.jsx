import React from 'react'
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultValue: '666',
            list: ['aaa','bbb'],
        }
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
    handleChange(e) {
        this.setState({
            defaultValue: e.target.value,
        })
    }
    handleAdd() {
        this.setState((prevState) => ({
            list: [prevState.defaultValue,...prevState.list],
            defaultValue: '',
        }))
    }
    handleDel(index) {
        const newList = this.state.list;
        newList.splice(index,1);
        this.setState((prevState) => ({
            list: newList
        }))
    }
}
export default TodoList;