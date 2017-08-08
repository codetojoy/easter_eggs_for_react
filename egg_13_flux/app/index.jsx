
'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import constants from './constants/app-constants.js'
import {incrementActions} from './actions/app-actions.js'
import {TodoStore} from './stores/count-store.js'

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
        
        this.state = {
            count: TodoStore.getCount() 
        }

        this.increment = this.increment.bind(this)
        this._onChange = this._onChange.bind(this)
    }

    _onChange() {
        this.setState({
            count: TodoStore.getCount()
        }) 
    }

    componentDidMount() {
        TodoStore.addChangeListener(this._onChange)
    }

    componentWillUnmount() {
        TodoStore.removeChangeListener(this._onChange)
    }

    increment() {
        incrementActions.incrementCount()
    }

    render() { 
        return (
            <div>
                <Header />
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Go</button>
                <Footer timestamp={new Date().toString()}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
