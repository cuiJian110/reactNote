import React from 'react'
import {connect} from 'react-redux'
import Header from '../../component/header'
class Home extends React.Component {
    constructor() {
        super()
    }
    render() {
        const {testValue} = this.props
        return (
            <div>
                {testValue}
                <div>
                    <Header />
                </div>
            </div>
        )
    }
}
const mapState = state => ({
    testValue: state.getIn(['headers','testValue'])
})
const mapDispatch = dispatch => ({

})
export default connect(mapState,mapDispatch)(Home)