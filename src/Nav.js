import React, { Component } from 'react';
import {Link, IndexLink} from 'react-router';
var jQuery = require('jquery');
window.$ = window.jQuery = jQuery;
import tether from 'tether';
window.Tether = tether;
var bootstrap = require('bootstrap');
bootstrap.$ = bootstrap.jQuery = jQuery;
import 'bootstrap/dist/css/bootstrap.min.css';

class Nav extends Component{


  constructor(){
    super();
    this.onSearch = this.onSearch.bind(this);

  }



	onSearch(e) {

		e.preventDefault();


    var location = this.refs.location.value;

      if(location && location.length > 0)
      {
        this.refs.location.value='';
        window.location.hash='#/?location=' + location;
      }
	}



	render(){

		return (
					<div>
					<nav className="navbar navbar-toggleable-md navbar-light bg-faded" style={{backgroundColor: '#e3f2fd'}}>
  					<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    
  					</button>
  				<a className="navbar-brand" href="#">React Weather App</a>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link"><IndexLink  to="/"  activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get weather </IndexLink></a>
      </li>
      <li className="nav-item">
        <a className="nav-link"><Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link"><Link to="/example" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link></a>
      </li>
    </ul>
    			<form className="form-inline my-2 my-lg-0" onSubmit={this.onSearch}>
      <input className="form-control mr-sm-2" ref="location" type="text" placeholder="Search weather"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Get weather</button>
    		</form>
  			</div>

					</nav>
					</div>
			)


	}
}

export default Nav


