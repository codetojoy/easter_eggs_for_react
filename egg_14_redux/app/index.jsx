
'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import reducer from '../reducers'

import CountWidget from '../containers/CountWidget.jsx'

let store = createStore(reducer)

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

    render() { 
        return (
            <div>
                <Header />
                <CountWidget store={this.props.store} />
                <Footer timestamp={new Date().toString()}/>
            </div>
        )
    }
}

ReactDOM.render(<App store={store}/>, document.getElementById('app'));
