import React/*, { Component }*/ from 'react';




// class WeatherMessage extends Component{


//   render(){

//   			var {temp,location}=this.props;



//     return(

//           <div>
          
//           <h4>its {temp} in {location}</h4>
//           </div>
//       )
//   }
// }


		var WeatherMessage = ({temp,location}) =>{

			//var {temp,location}=props;

			return (

			<div>
          
          <h3 className="offset-md-2">Its {temp} 'C in {location}</h3>
           </div>
				)
		}


export default WeatherMessage