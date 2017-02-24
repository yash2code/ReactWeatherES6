import React, { Component } from 'react';
//import $ from 'jquery';



class About extends Component{


	render(){


		return(
						<div>
						<h1 className="display-3 offset-md-2">About</h1>
						<div className="row">
						<p>This is a weather application build on React.</p>
	      				<p>Here are some of the tools I used:</p>
	      				</div>
	      				
		     			<ul className="list-group">
		     			  <li>
		     			    <a href="https://facebook.github.io/react">React</a> - This was the
		     			      JavaScript framework used.
		     			  </li>
		     			  <li>
		     			    <a href="http://openweathermap.org">Open Weather Map</a> - I used
		     			      Open Weather Map to search for weather data by city name.
		     			  </li>
		     			</ul> 
		     			
		     			</div>
			)
	}
}


export default About