import React from 'react';

import './App.css';
import axios from 'axios'
import DisplayQuote from './components/DisplayQuote'

                             
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson: null
    };
    this.getQuote = this.getQuote.bind(this);
  }
  componentDidMount(){
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
    // Extract the DATA from the received response
    .then(response => response.data)
    // Use this data to update the state
    .then(data => {
      this.setState({
        simpson: data[0],
      });
  });
  }
  getQuote() {
    // Send the request
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          simpson: data[0],
        });
    });
  }

  render() {
    return (
      <div className="App">
       {this.state.simpson ? <DisplayQuote simpson={this.state.simpson}/> : <p>Loading API</p>}
        <button type="button" onClick={this.getQuote}>Get Quote</button> 
      </div>
    );
  }
}

export default App;
