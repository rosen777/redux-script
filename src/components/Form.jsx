// src/js/Form.jsx
import React, { Component } from "react"
import { connect } from "react-redux"
import uuidv1 from "uuid"
import { addPerson } from "../actions/index"

function mapDispatchToProps(dispatch) {
    return {
        addPerson: person => dispatch(addPerson(person))
    }
}

class ConnectedForm extends Component {
    state = {
        name: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { name } = this.state
        const id = uuidv1()
        this.props.addPerson({
            name, id
        })

        this.setState({
            name: ""
        })
    }

    render() {
        const { name } = this.state
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={this.handleChange}
                    />
                    <button type="submit" className="btn btn-success btn-lng">
                        SAVE
                    </button>
                </div>
            </form>
        )

    }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm)

export default Form