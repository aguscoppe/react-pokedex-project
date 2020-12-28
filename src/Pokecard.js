import { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {
  render() {
    return (
      <div className="Pokecard">
        <h3> {this.props.name} </h3>
        <img src={this.props.imgURL} alt={this.props.name}></img>
        <p>Type: {this.props.type}</p>
        <p>EXP: {this.props.exp}</p>
      </div>
    );
  }
}

export default Pokecard;
