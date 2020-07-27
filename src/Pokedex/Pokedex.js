import React, { Component } from "react";
import "./Pokedex.css";
import Pokecard from "../Pokecard/Pokecard";

class Pokedex extends Component {
    constructor(props) {
        super(props);

        this.convertId = this.convertId.bind(this);
    }
    convertId(id) {
        if(id < 10) {
            let numString = id.toString();
            return `00${numString}`;
        } else if(id > 9 && id < 100) {
            let numString = id.toString();
            return `0${numString}`;
        } else {
            return id;
        }
    }

    render() {
        return (
        <div className="Pokedex">
            <h1 className="Pokedex-title">Pokedex</h1>
            <p className="Pokedex-total">Total Experience: {this.props.exp}</p>
            <p className={this.props.isWinner ? "Pokedex-win" : "Pokedex-lose"}>{this.props.isWinner ? "WINNER!" : "LOSER!"}</p>
            <div className="Pokedex-cards">
                {this.props.pokemon.map(card => {
                    return <Pokecard 
                            id={this.convertId(card.id)}
                            name={card.name}
                            type={card.type}
                            base_experience={card.base_experience}
                            />
                })}
            </div>
        </div>
        )
    }
}

export default Pokedex;