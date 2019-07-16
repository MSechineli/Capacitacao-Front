import React, { Component } from 'react'
import axios from 'axios'
import { input, Button } from 'antd'
import "./RequestPokemon.css"

export default class RequestPokemon extends Component {

    state = {
        nomePoke: "",
        pokeInfo: {
            fotoPoke: '',
            idPoke: '',
        }
    }

    // componentDidMount = () => {
    //     this._requestPoke();
    // }
    onNomePokeChange = e => {
        this.setState({
            nomePoke: e.target.value
        })
    }

    onClickPoke = e => {
        this._requestPoke();
    }

    _requestPoke = () => {
        const { nomePoke } = this.state
        axios.get(`https://pokeapi.co/api/v2/pokemon/${nomePoke}`)
            .then(response => {

                this.setState({
                    pokeInfo: {
                        idPoke: response.data.id,
                        fotoPoke: response.data.sprites.front_default
                    }
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    _renderPokemon = () => {
        const { pokeInfo } = this.state
        const { idPoke } = pokeInfo
        const { fotoPoke } = pokeInfo


        return (
            <div>
                <h1>{idPoke}</h1>
                <img src={fotoPoke} />
            </div>
        )
    }

    render() {
        const { pokeInfo } = this.state
        return (
            <div>
                <div className='form-css'>
                    <input placeholder="digite o Nome do Pokémon" onChange={this.onNomePokeChange} className='input-css' />
                    <Button type="primary" shape="circle" icon="search" onClick={this.onClickPoke} />
                </div>
                <div>
                    {pokeInfo ? this._renderPokemon() : null}
                </div>
            </div>
        )
    }
}
