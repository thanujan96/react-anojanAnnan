import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Input from './components/input.js';
import Output from './components/output.js';
import Navbar from './components/navbar.js';
import axios from 'axios';
import serverUrl from './config';
class App extends React.Component {
  state={
    values : {},//{ land_size: "23", beds: "23", baths: "23", house_size: "12", location: "2342" }
    locations:[{name:"kandy",value:2342},{name:"colombo",value:23324},{name:"vauniya",value:2334}],//{name:"Srilanka",value:234}
    message :''
  };

  //get locations data from server
  /*
  componentDidMount() {
    console.log('Component did mount!')
    axios.get(serverUrl)
    .then(res => {
      this.setState({locations:res.data})
    })
    .catch(err => { console.log("locations list not get")});
  };*/

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
        <Input onSub={this.handleSubmit} locations={this.state.locations}/>
        <Output message={this.state.message}/>
      </div>
    );
  }
}

export default App;
