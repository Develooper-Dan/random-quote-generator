import React from 'react';
//gets a random quote object as props and displays it
const Quote = (props) => {
  return(
  <React.Fragment>
   <p id='text'>
     <i className="fa fa-quote-left"> </i>
    {props.quote.quote}
     <i className="fa fa-quote-right"> </i>
   </p>
   <p id="author">
    {"- "+props.quote.author}
   </p>
  </React.Fragment>
  )}

  export default Quote;
