
import React from 'react'
import ReactDOM from 'react-dom'

export default class Profile extends React.Component {
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
