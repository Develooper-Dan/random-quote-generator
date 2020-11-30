import React, { Component } from 'react';
import Quote from "./Quote";
import Social from "./Social";

//main component
class App extends Component{
  constructor() {
    super();
    this.state = {
     quotes:[],
     randomQuote:{}
    }
    this.handleRequest = this.handleRequest.bind(this)
        this.getRandomQuote = this.getRandomQuote.bind(this)
  }
//fetches the quotes data stored on my github-account and puts it into this components state as an array. Also calls getRandomQuote to set an initial quote for display
  handleRequest =() => {
    fetch('https://gist.githubusercontent.com/Develooper-Dan/af1d39b1939c74cb27b38c496131bb44/raw/5424fa6bb779644080656727dbce6fbaaa3b3d13/quotes.json')
    .then(response => response.json())
    .then(quotes => {
      this.setState({quotes});
      this.getRandomQuote();
    })
    .catch(error => {
        console.error('Error fetching and parsing data', error);
    })
  }
//stores one randomly picked quote from the quotes[] in the randomQuote-state which is passed to the Quote- and Social-component
  getRandomQuote = ()=>{
    const randomIndex = Math.floor(Math.random() * this.state.quotes.length);
    this.setState({
      randomQuote: this.state.quotes[randomIndex]
      })
  }
//randomly changing bg-color whenever a new quote is displayed
changeColor =() =>{
   let rgb ="rgb(";
   for (let i=1; i<=3; i++){
     rgb += Math.floor(Math.random() * 256);
     if (i<3){
      rgb += ', '
     }
    }             document.getElementById("root").style.backgroundColor = rgb+')';
  }

componentDidMount(){
  this.handleRequest()
}

  render(){
    return(
      <div id='quote-box'>
        <Quote quote={this.state.randomQuote}/>
        <div id='quote-footer'>
          <Social quote={this.state.randomQuote}/>
          <button onClick = {() =>{
              this.getRandomQuote();
              this.changeColor()
              }}
            id='new-quote'>
              New Quote
          </button>
        </div>
      </div>
    )
  }
}

export default App
