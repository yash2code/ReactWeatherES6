import React, { Component } from 'react';
var jQuery = require('jquery');
window.$ = window.jQuery = jQuery;
import tether from 'tether';
window.Tether = tether;
var bootstrap = require('bootstrap');
bootstrap.$ = bootstrap.jQuery = jQuery;
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

class ErrorModal extends Component{


	static defaultProps={

		title:'Error'
	};

	static propTypes = {

		title: React.PropTypes.string,
		message: React.PropTypes.string.isRequired,
	}



	componentDidMount() {

	$('#error-modal').modal();
   
    
  }


	render(){

		var {title,message} = this.props;


		return(

					<div className="modal fade bd-example-modal-sm" id="error-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
					  <div className="modal-dialog modal-sm" role="document">
					    <div className="modal-content">
					      <div className="modal-header">
					        <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
					        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
					          <span aria-hidden="true">&times;</span>
					        </button>
					      </div>
					      <div className="modal-body">
					        {message}
					      </div>
					      <div className="modal-footer col-md-4 offset-md-4">
					        <button type="button" className="btn btn-primary" data-dismiss="modal">Okay</button>
					      </div>
					    </div>
					  </div>
					</div>

			)
	}



}

export default ErrorModal