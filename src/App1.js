import React, { Component } from 'react';

class AppMessage extends Component{



  render(){

    var name=this.props.name;
    var message=this.props.message;
    return(

            <div>
            <h1>hello {name}</h1>
            <p>{message}</p>
            </div>


          )
  }
  
}

class AppForm extends Component{

  constructor(){
    super();
    this.onButtonClick = this.onButtonClick.bind(this);

  }

  onButtonClick(e) {
    e.preventDefault();

    var updates={};
    var name = this.refs.name.value;
    var message = this.refs.message.value;
    

    if(typeof name==='string' && name.length>0){
      this.refs.name.value='';
      updates.name=name;
    }   

    if(typeof message==='string' && message.length>0){
      this.refs.message.value='';
      updates.message=message;
      
    }    

    this.props.onNewName(updates);    
  }



  render(){
    return(

            <div>
            <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/><br/>
          <input type="text" ref="message"/>
          <button>Submit</button>
        </form>
            </div>


          )
  }
  
}

class App extends Component { 

  constructor(props) {
  super();
  this.handleNewname = this.handleNewname.bind(this);
  this.state = {name:props.name,message:props.message};
 }

  



  static get defaultProps() {
  return {
       name: 'react',
       message: 'This is the default message!'

  }
}

handleNewname(updates){

  this.setState(updates) 
}


    

  
  render() {

    var name = this.state.name;
    var message=this.state.message;
    

    return (
      <div>
        
        
        <AppMessage name={name} message={message}/>
        <AppForm onNewName={this.handleNewname}  />
        
      </div>
    );
  }
}




export default App1;
