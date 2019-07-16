import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Teste extends Component {
    render() {
        const {value} = this.props
        return (
            <div>
                <h1>Teste {this.props.value}</h1>
            </div>
        )
    }
}

Teste.propTypes = {
    value: PtopTypes.string.isRequired,
}


export default Teste
