import React, { Component } from 'react';
import logo from './logo.svg';
import Fotos from './Fotos.js';
import './App.css';

class App extends Component {
	
	constructor(props) {
        super(props);

        console.log("Start")
        this.state = {
            imagenes: [],

        };

    }
	
	
    obtenerImagesCriterio(cri) {
    {
    }
    }
	
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Callr</h2>
        </div>
		<body>
		<input type="text" onChange={(event) => this.obtenerImagesCriterio(event.target.value)}/>
        <p className="App-intro">
			<Fotos/>
        </p>
		<script src="../js/script.js"></script>
		</body>
      </div>
    );
  }
}

export default App;
