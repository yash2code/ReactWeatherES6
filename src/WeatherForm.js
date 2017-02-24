import React, { Component } from 'react';




class WeatherForm extends Component{


	constructor(){
    super();
    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  onFormSubmit(e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if(typeof location==='string' && location.length>0){

    			this.refs.location.value='';
    			this.props.onSearch(location);
    }
}


  render(){


    return(

          <div className="form-group">
          <form onSubmit={this.onFormSubmit} className="form-control">
          <input className="form-control" type="text" ref="location" placeholder="Enter city name"/>
          <br/>
          <button className="btn btn-primary btn-block btn-outline-primary">Get Weather</button>
          </form>
          </div>
      )
  }
}


export default WeatherForm