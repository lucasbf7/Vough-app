import React, { useState } from "react";
import './App.css';

class App extends React.Component {
  state = {
    filter: "",
    vough: []
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(
        (res) => {
        this.setState({
          vough: res
        });
      });
  }

  handleChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <h1>Leads</h1>
        <div>
          <input placeholder="Pesquise..."></input>
        </div>
          <table>
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Companhia</th>
                <th>Nicho</th>
              </tr>
            </thead>
            {this.state.vough.map(item => (
            <tbody key={item.name}>
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.company.name}</td>
                <td>{item.company.bs}</td>
              </tr>
            </tbody>
            ))}
          </table>
      </div>
    )
  }
}

export default App;
