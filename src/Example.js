import React, { Component } from 'react';
import {Link} from 'react-router';



class Example extends Component{


	render(){


		return(
				<div>
					<h1 className="display-3">Examples</h1>
					<p>Here are few example locations to try out:</p>
					<ol>
						<li>
						<Link to="/?location=meerut">Meerut ,IN</Link>
						</li>
						<li>
						<Link to="/?location=delhi">Delhi ,IN</Link>
						</li>
					</ol>
				</div>
			)
	}
}


export default Example