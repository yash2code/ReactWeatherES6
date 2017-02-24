import React, { Component } from 'react';
import Nav from './Nav';


class Main extends Component{


	render(){

		return (
					<div>
					<Nav/>
					
					<div className="row  justify-content-center">
					<div className="col-md-4 col-sm-12">
					{this.props.children}
					</div>
					</div>
					
					</div>
			)


	}
}

export default Main