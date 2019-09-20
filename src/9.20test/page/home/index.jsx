import React from 'react'
class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            defineType: 'zidingyi',
            testareaValue: '',
            middleVar: '',
            mubanArr: ['我是模板1','我是模板2','我是模板3','我是模板4','我是模板5','我是模板6','我是模板7']
        }
    }
    render() {
        const {defineType, testareaValue} = this.state
        return (
            <div>
                <div className="content">
                    <label><input type="radio" name='defineType' value='muban' onChange={(e) => this.handleChangeType(e)}/>模板</label>
                    <label><input type="radio" name='defineType' value='zidingyi' onChange={(e) => this.handleChangeType(e)} id='zidingyi'/>自定义</label>
                </div>
                <div className="neirong">
                    <textarea value={testareaValue} onChange={(e) => this.handleChange(e)}></textarea>
                </div>
                <div className="commit">
                    {
                        defineType === 'muban' ? <button onClick={() => this.changeMuban()}>换一换</button> : null
                    }
                    <button>commit</button>
                </div>
                <div className="commitContent">
                    {testareaValue}
                </div>
            </div>
        )
    }
    getTestAreaValue = () => {
        const arr = this.state.mubanArr
        if(this.state.defineType === 'muban') {
            const random = Math.floor(Math.random()*arr.length)
            const mid = this.state.testareaValue
            this.setState({
                middleVar: mid,
                testareaValue: arr[random],
            })
        } else {
            const mid = this.state.middleVar
            this.setState({
                testareaValue: mid
            })
        }
    }
    componentDidMount() {
        document.querySelector('#zidingyi').checked = true
    }
    handleChangeType = (e) => {
        this.setState({
            defineType: e.target.value
        },() => this.getTestAreaValue())
    }
    handleChange = (e) => {
        this.setState({testareaValue: e.target.value})
    }
    changeMuban = () => {
        const arr = this.state.mubanArr
        const random = Math.floor(Math.random()*arr.length)
        this.setState({
            testareaValue: arr[random],
        })
    }
}
export default Home