
import React from 'react'

export default class AddProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'name',
            birthYear: 'birth year',
            works: [] 
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handleBirthYear = this.handleBirthYear.bind(this)
    }

    handleName(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleBirthYear(e) {
        this.setState({
            birthYear: e.target.value
        })
    }

    handleClick(e) {
        let newUser = {
            name: this.state.name,
            birthYear: this.state.birthYear,
            works: this.state.works
        }
        this.props.addUser(newUser)
    }

    render() {
        return (
            <div>
            <button onClick={this.handleClick}>Add</button>
            <input onChange={this.handleName} value={this.state.name} />
            <input onChange={this.handleBirthYear} value={this.state.birthYear} />
            </div>
        )
    }
}

