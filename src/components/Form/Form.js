import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Form extends Component {
    state ={
        nome: "asdas",
    }

    onNomeChange = e =>{
        this.setState({
            nome: e.target.value
        })
    }

    onSubmit = e =>{
        e.preventDefault()
        this.props.submit(this.state);
    }

    render() {
        return (
            <form onSubmit = {this.onSubmit}>
                <input 
                value = {this.state.nome} 
                onChange = {this.onNomeChange}
                type="Text"
                /> 
                <button type = "submit">Enviar</button>
            </form>
        )
    }
}

Form.propTypes = {
    submit: PropTypes.func.isRequired,
}

export default Form
