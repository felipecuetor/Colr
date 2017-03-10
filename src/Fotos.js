import React, { Component } from 'react';
//import './Fotos.css';

class Fotos extends Component {

	darURL(url)
	{
		var resp = "https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_s.jpg";
		resp.replace("{farm-id}", url.farm);
		resp.replace("{server-id}", url.server);
		resp.replace("{id}", url.id);
		resp.replace("{secret}", url.secret);
		return resp;
	}


  render() {
		console.log("Imprimiendo imagen");
    return (
      <div className="Foto">
		<img src={this.darURL()}/>
      </div>
    );
  }
}

export default Fotos;
