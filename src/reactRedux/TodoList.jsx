import React from 'react'
import {connect} from 'react-redux'
class TodoList extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <input type="text" value={this.props.defaultValue} onChange={(e) => this.props.handleChange(e)}/>
                    <button onClick={() => this.props.handleAdd()}>commit</button>
                </div>
                <div>
                    {
                        this.props.list.map((item,index) => (
                            <div key={index} onClick={() => this.props.handleDel(index)}>{item}</div>
                        ))
                    }
                </div>

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        defaultValue: state.initValue,
        list: state.list
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleChange(e) {
            const action = {
                type: 'change_value',
                value: e.target.value
            }
            dispatch(action);
        },
        handleAdd() {
            const action = {
                type: 'add_item',
            }
            dispatch(action);
        },
        handleDel(index) {
            const action = {
                type: 'del_item',
                index,
            }
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList)