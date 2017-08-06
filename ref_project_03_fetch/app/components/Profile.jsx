
import React from 'react'
import ReactDOM from 'react-dom'

export default class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const hobbies = this.props.hobbies.map( hobby => 
            <li>{hobby}</li>
        )

        return (
            <div>
                <h3>Profile</h3>
                <p>Name: {this.props.name}</p>
                <p>Age: {this.props.age}</p>
                <ul>{hobbies}</ul>
            </div>
        )
    }
}
