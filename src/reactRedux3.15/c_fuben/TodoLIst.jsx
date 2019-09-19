import React from 'react'
import {connect} from 'react-redux'
class TodoList extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <input type="text" value={this.props.v} onChange={(e) => this.props.handleChange(e)}/>
                    <button onClick={() => this.props.handleAdd()}>commit</button>
                </div>
                <div>
                    {
                        this.props.list.map((item, index) => (
                           <div key={index} onClick={() => this.props.handleDel(index)}>{item}</div>

                        ))
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    v: state.dv,
    list: state.list
})
const mapDispatchToProps = dispatch => ({
    handleChange(e) {
        // console.log(e.target.value);
        const action = {
            type: 'change',
            value: e.target.value,
        }
        dispatch(action)
    },
    handleAdd() {
        const action = {
            type: 'add'
        }
        dispatch(action)
    },
    handleDel(index) {
        const action = {
            type: 'del_',
            index,
        }
        dispatch(action)
    }

})
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);