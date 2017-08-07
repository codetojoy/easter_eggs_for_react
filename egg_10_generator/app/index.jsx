
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

let generator = (Component, state) => class extends React.Component {
    constructor(props) {
        super(props)
        this.state = state 
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }

    render() {
        return <Component {...this.props} {...this.state} />
    }
}

class Comp1 extends React.Component {
    render() { 
        return (
            <div>
                <p>Comp1</p>
                {this.props.count}
            </div>
        )
    }
}

class Comp2 extends React.Component {
    render() { 
        return (
            <div>
                <p>Comp2</p>
                {this.props.count}
            </div>
        )
    }
}

let WrappedComp1 = generator(Comp1, {count: 100})
let WrappedComp2 = generator(Comp2, {count: 200})

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() { 
        return (
            <div>
                <Header />
                <WrappedComp1 />
                <hr />
                <WrappedComp2 />
                <Footer timestamp={new Date().toString()}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
