import React, { Component } from "react";
import "./Pokecard.css";
// const POKE_API =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
    return (
      <div className="pokecard">
        <h1 className="pokecard-title">{this.props.name}</h1>
        <div className="pockecard-img"><img src={imgSrc} alt={this.props.name} className="p-img"></img></div>
        <div className="pokecard-data">Type: {this.props.type}</div>
        <div className="pokecard-data">Exp: {this.props.base_experience}</div>
      </div>
    );
  }
}

export default Pokecard;
