import React from 'react'
import {connect} from 'react-redux'
class Header extends React.Component {
    render() {
        return (
            <div>
                <input type="text" 
                onBlur={() => this.props.handleBlur()}
                onFocus={() => this.props.handleFocus()}/>
                <span>
                    {
                        this.props.focus?'jj':'sj'
                    }
                </span>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    focus: state.getIn(['header','focus']),
})
const mapDispatchToProps = dispatch => ({
    handleFocus() {
        const action = {
            type: 'jj',
        }
        dispatch(action);
    },
    handleBlur() {
        const action = {
            type: 'sj',
        }
        dispatch(action);
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Header);