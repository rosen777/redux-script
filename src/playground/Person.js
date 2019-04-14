import React, { Component } from 'react'

export default class Person extends Component {

    state = {
        people: [
            {
                name: "Antony",
                id: 1
            },
            {
                name: "Brian",
                id: 2
            }
        ]
    }



    render() {
        const { people } = this.state
        return <ul>
            {
                people.map(el => <li key={el.id}>{el.name}</li>
                )}
            <button>Change Name</button>
        </ul>
    }

}