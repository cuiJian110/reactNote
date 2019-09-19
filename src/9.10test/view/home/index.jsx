import React from 'react'
import Header from '../../components/header'
class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            msg: '9090'
        }
    }
    render() {
        return (
            <div>
                {this.state.msg}
                <Header />
            </div>
        )
    }
}
export default Home