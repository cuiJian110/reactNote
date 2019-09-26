import React from 'react'
import {connect} from 'react-redux'
class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            test1: 'test1',
            test2: 'test2'
        }
    }
    render() {
        const {test1, test2} = this.state
        const {t1, t2, changeT1, changeT2, changeT12} = this.props
        return (
            <div>
                <div>
                    <button onClick={() => this.changeAll()}>change</button>
                    <p>{test1}</p>
                    <p>{test2}</p>
                    <button onClick={() => changeT1()}>t1</button>
                    <button onClick={() => changeT2()}>t2</button>
                    <button onClick={() => changeT12()}>t12</button>
                    <p>{t1}</p>
                    <p>{t2}</p>
                </div>
            </div>
        )
    }
    changeAll = () => {
        this.setState({
            test1: 'newtest1',
            test2: 'newtest2'
        })
    }
}
const mapState = state => ({
    t1: state.getIn(['headers','test1']),
    t2: state.getIn(['headers','test2'])
})
const mapDispatch = dispatch => ({
    changeT1() {
        const action = {type: 'changeT1'}
        dispatch(action)
    },
    changeT2() {
        const action = {type: 'changeT2'}
        dispatch(action)
    },
    changeT12() {
        const action = {type: 'changeT12'}
        dispatch(action)
    }
})
export default connect(mapState, mapDispatch)(Home)