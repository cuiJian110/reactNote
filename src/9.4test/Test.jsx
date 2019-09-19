import React from 'react'
class Test extends React.Component {
    constructor() {
        super()
        this.state = {
            val: 0
        }
    }
    render() {
        return <div>
            <div>
                jjjlll
                {this.state.val}
            </div>
            <div className="content">
                <button onClick={() => this.$alert.test1()}>test1</button>
                <button onClick={() => this.handlealert222()}>test2</button>
                <button onClick={() => this.$alert.test3()}>test3</button>
                <button onClick={() => this.$alert.test4()}>test4</button>
                <button onClick={() => this.$alert.test5()}>test5</button>
            </div>
        </div>
    }
    handlealert222 = () => {
        this.setState({
            val: 90
        })
        this.$alert.test2()
    }
    componentDidMount() {
        this.setState({val: this.state.val+1})
        console.log('a',this.state.val)

        this.setState({val: this.state.val+1})
        console.log('b',this.state.val)

        setTimeout(() => {
            this.setState({val: this.state.val+1})
            console.log('c',this.state.val)

            this.setState({val: this.state.val+1})
            console.log('d',this.state.val)
        },0)
    }


}
export default Test