import React, { Component } from 'react';
//import './Fotos.css';

class Fotos extends Component {
  render() {
    return (
      <div className="Foto">
		<img src={`${this.props.url}`}/>
      </div>
    );
  }
}

export default Fotos;
