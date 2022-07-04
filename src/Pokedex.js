import React, { Component } from "react";
import "./Pokedex.css";
import Pokecard from "./Pokecard";

export class Pokedex extends Component {
  render() {
    return (
      <div className="pokedex">
        <h1>Your hand have {this.props.exp}</h1>
        {this.props.isWinner ? (
          <p className="card-win">This hand Win</p>
        ) : (
          <p className="card-lose">This hand Lose</p>
        )}
        <div className="pokedex-cards">
          {this.props.pokemon.map((p) => {
            return (
              <Pokecard
                id={p.id}
                name={p.name}
                type={p.type}
                base_experience={p.base_experience}
              />
            );
          })}
        </div>
        <hr></hr>
      </div>
    );
  }
}

export default Pokedex;
