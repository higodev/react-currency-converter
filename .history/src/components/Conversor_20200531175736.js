import React, { Component } from "react";

export default class Conversor extends Component {
  render() {
    return (
      <div className="conversor">
        <h2>USD para BRL</h2>
        <input type="text" />
        <input type="button" value="converter" />
        <h2>Valor convertido</h2>
      </div>
    );
  }
}
