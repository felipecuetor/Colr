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

						imagenesRojas:[],

						imagenesAzules:[],

						imagenesAmarillas[],

						imagenesVerdes[],

						imagenesPurpura[],

						imagenesNaranja[],

						imagenesCafes[],

        };



		this.obtenerImagesCriterio("familia");
    }

		obtenerImagenesCriterioRojo(cri)
		{
			{
							axios.get(ROOT_URL + "/flickr/" + cri+",red")
									.then(response => {
											this.setstate({
													imagenesRojas: response.data
											});
											console.log("La info de imagenes: "+this.state.imagenes);
									})
					}
		}

		obtenerImagenesCriterioAzules(cri)
		{
			{
							axios.get(ROOT_URL + "/flickr/" + cri+",blue")
									.then(response => {
											this.setstate({
													imagenesAzules: response.data
											});
											console.log("La info de imagenes: "+this.state.imagenes);
									})
					}
		}

		obtenerImagenesCriterioAmarillas(cri)
		{
			{
							axios.get(ROOT_URL + "/flickr/" + cri+",yellow")
									.then(response => {
											this.setstate({
													imagenesAmarillas: response.data
											});
											console.log("La info de imagenes: "+this.state.imagenes);
									})
					}
		}

		obtenerImagenesCriterioPurpura(cri)
		{
			{
							axios.get(ROOT_URL + "/flickr/" + cri+",purple")
									.then(response => {
											this.setstate({
													imagenesPurpura: response.data
											});
											console.log("La info de imagenes: "+this.state.imagenes);
									})
					}
		}

		obtenerImagenesCriterioVerdes(cri)
		{
			{
							axios.get(ROOT_URL + "/flickr/" + cri+",green")
									.then(response => {
											this.setstate({
													imagenesVerdes: response.data
											});
											console.log("La info de imagenes: "+this.state.imagenes);
									})
					}
		}

		obtenerImagenesCriterioNaranja(cri)
		{
			{
							axios.get(ROOT_URL + "/flickr/" + cri+",orange")
									.then(response => {
											this.setstate({
													imagenesNaranja: response.data
											});
											console.log("La info de imagenes: "+this.state.imagenes);
									})
					}
		}

		obtenerImagenesCriterioCafes(cri)
		{
			{
							axios.get(ROOT_URL + "/flickr/" + cri+",brown")
									.then(response => {
											this.setstate({
													imagenesCafes: response.data
											});
											console.log("La info de imagenes: "+this.state.imagenes);
									})
					}
		}

		obtenerImagenesCriterioRojo(cri)
		{
			{
							axios.get(ROOT_URL + "/flickr/" + cri+",red")
									.then(response => {
											this.setstate({
													imagenesRojas: response.data
											});
											console.log("La info de imagenes: "+this.state.imagenes);
									})
					}
		}


    obtenerImagesCriterio(cri) {
    {

		console.log("Buscando con criterio: "+ cri);




    }
    }



  render() {
		console.log("Render App");
    return (
      <div className="App">
	  <add name="Access-Control-Allow-Origin" value="*"/>
        <div className="App-header">
          <h1>Colr</h1>
        </div>
		<body>
		<input type="text" placeholder="Search images here" onChange={(event) => this.obtenerImagesCriterio(event.target.value)}/>
        <p className="App-intro">
				{this.state.imagenes}
				{this.state.imagenesRojas.map(imagesData => < Fotos key = { imagesData.id } {...imagesData }/>)}
				{this.state.imagenesAzules.map(imagesData => < Fotos key = { imagesData.id } {...imagesData }/>)}
				{this.state.imagenesAmarillas.map(imagesData => < Fotos key = { imagesData.id } {...imagesData }/>)}
				{this.state.imagenesPurpura.map(imagesData => < Fotos key = { imagesData.id } {...imagesData }/>)}
				{this.state.imagenesNaranja.map(imagesData => < Fotos key = { imagesData.id } {...imagesData }/>)}
				{this.state.imagenesVerdes.map(imagesData => < Fotos key = { imagesData.id } {...imagesData }/>)}
				{this.state.imagenesCafes.map(imagesData => < Fotos key = { imagesData.id } {...imagesData }/>)}
				</p>

		</body>
      </div>
    );
  }
}

export default App;
