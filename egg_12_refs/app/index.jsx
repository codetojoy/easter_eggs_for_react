
'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

const Header = props => (
    <p>This is a header</p>
)

const Footer = props => (
    <div>
        <p>This is a footer</p>
        <p>{props.timestamp}</p>
    </div>
)

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = { input: 'x' }

        this.handler = this.handler.bind(this)
        this.submit = this.submit.bind(this)
    }

    handler(e) {
        this.setState({
            input: e.target.value 
        })
    }

    submit() {
        this.setState({
            input: ''
        }, () => { 
            ReactDOM.findDOMNode(this.refs.inputBox).focus()
        })
    }

    render() { 
        return (
            <div>
                <Header />
                <input ref='inputBox' value={this.state.input}
                    onChange={this.handler} />
                <button onClick={this.submit}>Go</button>
                <Footer timestamp={new Date().toString()}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
