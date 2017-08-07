
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

class User extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <p>Name: {this.props.name}</p>
                <p>Born: {this.props.birthYear}</p>
            </div>
        )
    }
}

User.propTypes = {
    name: React.PropTypes.string.isrequired,
    birthYear: React.PropTypes.number.isrequired
}

User.defaultProps = {
    name: 'Bach',
    birthYear: 1685
}

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() { 
        return (
            <div>
                <Header />
                <User />
                <User name="Mozart" birthYear={1756} />
                <Footer timestamp={new Date().toString()}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
