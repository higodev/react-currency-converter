import React, { Component } from "react";

export default class Conversor extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="conversor">
        <h2>USD para BRL</h2>
        <input type="text" />
        <input type="button" value="Converter" />
        <h2>Valor convertido</h2>
      </div>
    );
  }
}
