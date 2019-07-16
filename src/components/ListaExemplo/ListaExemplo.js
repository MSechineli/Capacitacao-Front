import React, { Component } from 'react'
import { Button } from 'antd';
import './ListaExemplo.css'

export class ListaExemplo extends Component {
    state = {
        arrayNomes: [
            'Claudia',
            'Igor',
            'Guilherme',
            'Vitor1',
            'Vitor2',
            'Matheus1',
            'Matheus2',
            'Maria',
            'Bia',
            'Arthur'
        ]
    }

    _renderNomes = () => {
        const{arrayNomes} = this.state

        return(
            arrayNomes.map(nome => {
                return(
                    <div
                    style = {{marginLeft: '10px'}}>
                        <p className = "corTexto"
                           
                        >{nome}</p>
                        <Button shape="circle" icon="search" />
                    </div>
                );
            })
        );
    }

    render() {
        return (
            <div>
                {this._renderNomes()}
            </div>
        )
    }
}

export default ListaExemplo
