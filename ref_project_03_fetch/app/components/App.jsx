
import React from 'react'
import ReactDOM from 'react-dom'

import Header from './Header.jsx'
import Profile from './Profile.jsx'
import AddProfile from './AddProfile.jsx'
import Footer from './Footer.jsx'

import {getProfiles} from '../utils/profileApi'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            profiles: []
        }

        this.addUser = this.addUser.bind(this)
    }

    componentDidMount() {
        getProfiles().then(profiles => {
            this.setState({
                profiles: profiles
            });
        });
    }

    addUser(user) {
        this.setState({
            profiles: this.state.profiles.concat(user)
        })
    }

    render() { 
        let profiles = this.state.profiles.map(profile =>
                <Profile name={profile.name}
                         age={profile.age}
                         hobbies={profile.hobbies} /> 
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

