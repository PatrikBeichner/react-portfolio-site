import React, { Component } from 'react';

export default class Greeting extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    const greets = ['Hello,', 'Hej,', 'Salut,', 'Hallo,', 'Hola,', 'Privet,', 'Ciao,', 'Witaj,', 'Hei,'];

    let randGreet = Math.floor(Math.random() * greets.length);
    return <h1>{greets[randGreet]}</h1>;
  }
}
