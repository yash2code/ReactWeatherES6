import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import openWeatherMap from './api/openWeatherMap';
import ErrorModal from './errorModal';
//import  './styles/app.css'




class Weather extends Component{

	constructor() {
  super();
    this.handleSearch = this.handleSearch.bind(this);

  this.state = {isLoading:false,errorMessage:undefined};
 }




	

	handleSearch(location){

		//	var that=this;

			this.setState({

				isLoading:true,
				errorMessage:undefined,
				location:undefined,
				temp:undefined
			})

		openWeatherMap.getTemp(location).then((temp)=>{

			this.setState({

				location:location,
				temp:temp,
				isLoading:false
			})


		},(err)=>{

			this.setState({
				isLoading:false,
				errorMessage:err
			})

			//alert(err);


		});

		/*this.setState({

			location:location,
			temp:23
		})*/
	}



	componentDidMount(){

    var location = this.props.location.query.location;

    if(location && location.length > 0)
    {
    	this.handleSearch(location);
    	window.location.hash='#/';
    }
  }

  componentWillReceiveProps(newProps){

  	var location = newProps.location.query.location;

    if(location && location.length > 0)
    {
    	this.handleSearch(location);
    	window.location.hash='#/';
    }


  }



	render(){

		var {isLoading, temp,location,errorMessage}=this.state;

		function renderMessage(){

			if(isLoading){
				return <h3>fetching weather...</h3>
			}else if(temp && location){
				return <WeatherMessage location={location} temp={temp}/>
			}
		};


		function renderError(){

			if(typeof errorMessage === 'string'){


				return(

						<ErrorModal message={errorMessage}/>
					)
			}
		};

		return(
					<div>
					<h1 className="display-2 offset-md-1">Weather</h1>
					<WeatherForm onSearch={this.handleSearch}/>
					{renderMessage()}
					{renderError()}
					</div>
			)
	}
}


export default Weather