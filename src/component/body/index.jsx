import React from 'react'
import {connect} from 'react-redux'
class Body extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <input type="text" onFocus={() => this.props.handleFocus()} onBlur={() => this.props.handleBlur()}/>
                    <span>
                        {this.props.focus ? 'ok' : '失去焦点'}
                    </span>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    focus: state.getIn(['body','focus']),
})
const mapDispatchToProps = dispatch => ({
    handleFocus() {
        const action = {
            type: 'handle_focus',
        }
        dispatch(action);
    },
    handleBlur() {
        const action = {
            type: 'handle_blur',
        }
        dispatch(action);
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Body);