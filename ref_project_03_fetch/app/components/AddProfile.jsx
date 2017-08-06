
import React from 'react'

export default class AddProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: '',
            hobbies: [] 
        }

        this.handleClick = this.handleClick.bind(this)

        this.handleName = this.handleName.bind(this)
        this.handleAge = this.handleAge.bind(this)
        this.handleHobby = this.handleHobby.bind(this)
    }

    handleName(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleAge(e) {
        this.setState({
            age: e.target.value
        })
    }

    handleHobby(e) {
        this.setState({
            hobby: e.target.value
        })
    }

    handleClick(e) {
        let newUser = {
            name: this.state.name,
            age: this.state.age,
            hobbies: [this.state.hobby]
        }
        this.props.addUser(newUser)
    }

    render() {
        return (
            <div>
            <button onClick={this.handleClick}>Add</button>

            <input onChange={this.handleName} value={this.state.name} />
            <input onChange={this.handleAge} value={this.state.age} />
            <input onChange={this.handleHobby} value={this.state.hobby} />
            </div>
        )
    }
}

