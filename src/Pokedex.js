import Pokecard from "./Pokecard";
import "./Pokedex.css";
import React, { Component } from "react";

class Pokedex extends Component {
  render() {
    function pad(num, size) {
      num = num.toString();
      while (num.length < size) num = "0" + num;
      return num;
    }

    let title;

    if (this.props.isWinner) {
      title = <h1 className="Pokedex-winner">Winning hand</h1>;
    } else {
      title = <h1 className="Pokedex-loser">Loser hand</h1>;
    }

    return (
      <div className="Pokedex">
        {title}
        <h4>Total experience: {this.props.exp}</h4>
        <div className="Pokedex-cards">
          {this.props.pokemon.map((card) => (
            <Pokecard
              key={card.id}
              name={card.name}
              imgURL={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pad(
                card.id,
                3
              )}.png`}
              type={card.type}
              exp={card.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
