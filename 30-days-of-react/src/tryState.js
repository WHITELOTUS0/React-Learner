// index.js
import React from 'react'
import ReactDOM from 'react-dom'

class Trying extends React.Component {
    // declaring state
    state = {
        count: 0,
    }
    render() {
        // accessing the state value
        const count = this.state.count
        return (
            <div className='App'>
                <h1>{count} </h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Add One</button>
                <button onClick={() => this.setState({ count: this.state.count - 1 })}>Remove One</button>

            </div>
        )
    }
}
export default Trying;