import React, { Component } from 'react';
//import './Fotos.css';

class Fotos extends Component {

	darURL()
	{
		{
		var resp = "https://farm";
		resp+=this.props.farm+".staticflickr.com/";
		resp+=this.props.server+"/";
		resp+=this.props.id+"_";
		resp+=this.props.secret+"_s.jpg";
		console.log(resp);
		return resp;
		}
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
