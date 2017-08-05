
import React from 'react'
import ReactDOM from 'react-dom'

import Header from './Header.jsx'
import Profile from './Profile.jsx'
import AddProfile from './AddProfile.jsx'
import Footer from './Footer.jsx'

export default class App extends React.Component {
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

        this.addUser = this.addUser.bind(this)
    }

    addUser(user) {
        this.setState({
            profiles: this.state.profiles.concat(user)
        })
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
                <AddProfile addUser={this.addUser} />
                <Footer timestamp={new Date().toString()}/>
            </div>
        )
    }
}

