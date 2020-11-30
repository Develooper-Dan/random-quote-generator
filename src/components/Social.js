import React from 'react';
//contains all icons for posting quotes to social media 
const Social = (props) => {
  const twitterUrl= `https://twitter.com/intent/tweet?text=${props.quote.quote}%20-${props.quote.author}`
  return(
  <div id="social">
    <a href={twitterUrl} target="_blank" rel="noreferrer" id="tweet-quote"> <i className="fa fa-twitter"></i>
    </a>
    <div className="fb-share-button" data-href="https://develooper-dan.github.io/random-quote-generator/" data-layout="button" data-size="large">
      <a target="_blank" rel="noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelooper-dan.github.io%2Frandom-quote-generator%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share
      </a>
    </div>
  </div>
)}

  export default Social;
