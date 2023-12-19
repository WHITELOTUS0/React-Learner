// index.js
import React from 'react'
import ReactDOM from 'react-dom'

class Trying extends React.Component {
    // declaring state
    state = {
        count: 0,
        bColor:"white"
    }

    addOne=()=>{
        this.setState({count:this.state.count+1})
    }

    minusOne = ()=>{
        this.setState({count:this.state.count-1})
    }

    changeColor=()=>{
        this.setState({bColor:this.state.bColor==="white"?"black":"white"})
    }
    render() {
        // accessing the state value
        const count = this.state.count
        const bColor=this.state.bColor
        return (
            <div style={{backgroundColor:bColor}}>
                <h1>{count} </h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.changeColor}>Change Color</button>

            </div>
        )
    }
}
export default Trying;