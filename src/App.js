import React, { Component } from 'react';
import logo from './logo.svg';
import Fotos from './Fotos.js';
import axios from 'axios';
import './App.css';
const ROOT_URL = "http://localhost:9000";
var Columns = require('react-columns');


class App extends Component {

	constructor(props) {
        super(props);
        console.log("Start")
        this.state = {

						imagenesRojas:[],

						imagenesAzules:[],

						imagenesAmarillas:[],

						imagenesVerdes:[],

						imagenesPurpura:[],

						imagenesNaranja:[],

						imagenesCafes:[],
        };


		this.obtenerImagesCriterio("family");
    }
	

		obtenerImagenesCriterioRojo(cri)
		{
			console.log("Buscando imagenes rojas");
			axios.get(ROOT_URL + "/flickr/" + cri+",red")
				.then(response => {
					this.setState({
						imagenesRojas: response.data.photos.photo
						});
						console.log("La info de imagenes");
				})
					
		}

		obtenerImagenesCriterioAzules(cri)
		{
			{
				console.log("Buscando imagenes azules");
							axios.get(ROOT_URL + "/flickr/" + cri+",blue")
									.then(response => {
											this.setState({
													imagenesAzules: response.data.photos.photo
											});
											console.log("La info de imagenes: "+this.state.imagenes);
									})
					}
		}

		obtenerImagenesCriterioAmarillas(cri)
		{
			{
				console.log("Buscando imagenes amarillas");
							axios.get(ROOT_URL + "/flickr/" + cri+",yellow")
									.then(response => {
											this.setState({
													imagenesAmarillas: response.data.photos.photo
											});
											console.log("La info de imagenes: "+this.state.imagenes);
									})
					}
		}

		obtenerImagenesCriterioPurpura(cri)
		{
			{
				console.log("Buscando imagenes purpura");
							axios.get(ROOT_URL + "/flickr/" + cri+",purple")
									.then(response => {
											this.setState({
													imagenesPurpura: response.data.photos.photo
											});
											console.log("La info de imagenes: "+this.state.imagenes);
									})
					}
		}

		obtenerImagenesCriterioVerdes(cri)
		{
			{
				console.log("Buscando imagenes verdes");
							axios.get(ROOT_URL + "/flickr/" + cri+",green")
									.then(response => {
											this.setState({
													imagenesVerdes: response.data.photos.photo
											});
											console.log("La info de imagenes: "+this.state.imagenes);
									})
					}
		}

		obtenerImagenesCriterioNaranja(cri)
		{
			{
				console.log("Buscando imagenes naranja");
							axios.get(ROOT_URL + "/flickr/" + cri+",orange")
									.then(response => {
											this.setState({
													imagenesNaranja: response.data.photos.photo
											});
											console.log("La info de imagenes: "+this.state.imagenes);
									})
					}
		}

		obtenerImagenesCriterioCafes(cri)
		{
			{
				console.log("Buscando imagenes cafes");
							axios.get(ROOT_URL + "/flickr/" + cri+",brown")
									.then(response => {
											this.setState({
													imagenesCafes: response.data.photos.photo
											});
											
									})
					}
		}


    obtenerImagesCriterio(cri) {
    {
		console.log("Buscando con criterio: "+ cri);
		
		this.obtenerImagenesCriterioRojo(cri);
		this.obtenerImagenesCriterioAmarillas(cri);
		this.obtenerImagenesCriterioAzules(cri);
		this.obtenerImagenesCriterioCafes(cri);
		this.obtenerImagenesCriterioNaranja(cri);
		this.obtenerImagenesCriterioPurpura(cri);
		this.obtenerImagenesCriterioVerdes(cri);
		
		
    }
    }



  render() {
		console.log("Render App");
    return (
      <div className="App">

	  <head>
	  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
	  </head>
	  <add name="Access-Control-Allow-Origin" value="*"/>
        <div className="App-header">
          <h1>Colr</h1>
        </div>
		<body>
		<input type="text" placeholder="Search images here" onChange={(event) => this.obtenerImagesCriterio(event.target.value)}/>
		<Columns columns="7">
		<div class="columna">
				{this.state.imagenesRojas.map(imagesData => < Fotos key = { imagesData.id } {...imagesData }/>)}
		</div>
		<div class="columna">		
				{this.state.imagenesAzules.map(imagesData => < Fotos key = { imagesData.id } {...imagesData }/>)}
		</div>	
		<div class="columna">
				{this.state.imagenesAmarillas.map(imagesData => < Fotos key = { imagesData.id } {...imagesData }/>)}
		</div>	
		<div class="columna">		
				{this.state.imagenesPurpura.map(imagesData => < Fotos key = { imagesData.id } {...imagesData }/>)}
		</div>
		<div class="columna">		
				{this.state.imagenesNaranja.map(imagesData => < Fotos key = { imagesData.id } {...imagesData }/>)}
		</div>	
		<div class="columna">		
				{this.state.imagenesVerdes.map(imagesData => < Fotos key = { imagesData.id } {...imagesData }/>)}
		</div>
		<div class="columna">		
				{this.state.imagenesCafes.map(imagesData => < Fotos key = { imagesData.id } {...imagesData }/>)}
		</div>			
		</Columns>

		</body>
      </div>
    );
  }
}

export default App;
