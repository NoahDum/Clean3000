import './App.scss';
import React, { Component } from 'react';
import logo from './Image/logo-clean.png'
import List from './components/List';

export default class App extends Component {
  state = {
    text: "",
    avis: [
      {
        id: Date.now(),
      }
    ]
  }

  addAvis() {
    const newAvis = {
      id: Date.now(),
    };
    const copyAvis = [...this.state.avis];
    copyAvis.push(newAvis);

    this.setState({
      avis: copyAvis,
      text: ""
    });
  }

  deleteAvis(item) {
      const copyAvis = [...this.state.avis];
      
      let position = copyAvis.indexOf(item);

      copyAvis.splice(position, 1);

      this.setState({ avis: copyAvis });
  }

  renderAvis() {
    const listes = this.state.avis.map(item => {
      return (
        <List
          key={item.id}
          number={item.id}
          text = {item.text}
          item={item}
          buttonAction={() => this.deleteAvis(item)}
        />
      );
    });

    return (
      <div className="todos">
        {listes}
      </div >
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="" />
        </header>
        <main className="container">
          <h1>Avis de passage</h1>
          <div>
            <button onClick={() => this.addAvis()} className="btnAdd">Ajouter un Avis</button></div>
          <div>
            {this.renderAvis()}
          </div>
        </main>
      </div>
    );
  }
}
