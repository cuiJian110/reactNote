import React from 'react'
import {connect} from 'react-redux'
class Header extends React.Component {
    render() {
        return (
            <div>
                <input type="text" onFocus={() => this.props.handleFocus()} onBlur={() => this.props.handleBlur()}/>
                <span>
                    {this.props.focus ? '聚焦啦' : '失去焦点啦'}
                </span>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    focus: state.getIn(['header','focus'])
    // focus: state.get('header').get('focus'),
})
const mapDispatchToProps = dispatch => ({
    handleFocus() {
        const action = {
            type: 'focus',
        }
        dispatch(action);
    },
    handleBlur() {
        const action = {
            type: 'blur',
        }
        dispatch(action);
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Header);