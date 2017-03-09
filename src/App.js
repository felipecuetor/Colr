import React, { Component } from 'react';
import logo from './logo.svg';
import Fotos from './Fotos.js';
import axios from 'axios';
import './App.css';
const ROOT_URL = "http://localhost:9000";


class App extends Component {
	
	constructor(props) {
        super(props);
        console.log("Start")
        this.state = {
            imagenes: [],
        };
		
		

		this.obtenerImagesCriterio("familia");
    }
	
	
    obtenerImagesCriterio(cri) {
    {
		
		console.log("Buscando con criterio: "+ cri);
		
		{
            axios.get(ROOT_URL + "/flickr/" + cri)
                .then(response => {
                    this.setState({
                        imagenes: response.data
                    });
                })
        }
    }
    }
	
  render() {
    return (
      <div className="App">
	  <add name="Access-Control-Allow-Origin" value="*"/>
        <div className="App-header">
          <h1>Callr</h1>
        </div>
		<body>
		<input type="text" onChange={(event) => this.obtenerImagesCriterio(event.target.value)}/>
        <p className="App-intro">
			{this.state.imagenes.map(imagesData => < Fotos key = { imagesData.id } {...imagesData }/>)}
        </p>
		</body>
      </div>
    );
  }
}

export default App;
