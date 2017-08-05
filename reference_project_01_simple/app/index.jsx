
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

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const works = this.props.works.map( work => 
            <li>{work}</li>
        )

        return (
            <div>
                <h3>Profile</h3>
                <p>Name: {this.props.name}</p>
                <p>Born: {this.props.birthYear}</p>
                <ul>{works}</ul>
            </div>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            profiles: [
                {
                    name: 'Mozart',
                    birthYear: 1756,
                    works: ['symphony', 'piano', 'opera']
                },
                {
                    name: 'Chopin',
                    birthYear: 1810,
                    works: ['piano', 'voice']
                }
            ]
        }
    }

    render() { 
        let profiles = this.state.profiles.map(profile =>
                <Profile name={profile.name}
                         birthYear={profile.birthYear}
                         works={profile.works} /> 
        )
        return (
            <div>
                <Header />
                {profiles}
                <Footer timestamp={new Date().toString()}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
