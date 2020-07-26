import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Input from './components/input.js';
import Output from './components/output.js';
import Navbar from './components/navbar.js';
import axios from 'axios';
import serverUrl from './config';
class App extends React.Component {
  state={
    values : {},
    message :''
  };
  handleSubmit = (values) =>{
    this.setState({values});
    this.handleEvent();
  };
  handleEvent = () => {
    const values = this.state.values;
    axios.post(serverUrl,{values})
    .then(res => {
      this.setState({message:res.data});
      console.log(this.state.message);
    })
    .catch((err) => {
      this.setState({message:"Couldnot connect with server!"});
    })

  };
  render(){
    return (
      <div className="App">
        <Navbar/>
        <Input onSub={this.handleSubmit}/>
        <Output message={this.state.message}/>
      </div>
    );
  }
}

export default App;
