import React, { Component } from "react";
import "./Pokecard.css";
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

class Pokecard extends Component {
    render() {
        return (
            <div className="Pokecard">
                <h2 className="Pokecard-title">{this.props.name}</h2>
                <img className="Pokecard-pic" src={`${POKE_API}${this.props.id}.png`} alt={this.props.name}/>
                <p className="Pokecard-type">Type: {this.props.type}</p>
                <p className="Pokecard-exp">EXP: {this.props.base_experience}</p>
            </div>
        )
    }
}

export default Pokecard;