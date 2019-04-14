import React from "react"
import { connect } from "react-redux"

const mapStateToProps = state => {
    return { 
        people: state.people
    }
}

const ConnectedList = ({ people }) => (
    <ul className="list-group list-group-flush">
        {people.map(person => (
            <li className="list-group-item" key={person.id}>
                {person.name}
            </li>
            )
        )
    }
    </ul>
)

const List = connect(mapStateToProps) (ConnectedList)
export default List