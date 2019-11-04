
/* This is the array containing the quote objects, consisting oth quote itself,
the source plus citation and yeaf if available.
*/
var quotes = [
  { quote: 'No man is rich enough to buy back his past.',
    source: 'Oscar Wilde'
  },
  { quote: 'Freedom is the recognition of necessity.',
    source: 'Friedrich Engels',
    citation: 'Herrn Eugen Dührings Umwälzung der Wissenschaft',
    year: 1878
  },
  { quote: 'Life is short, break the rules. Forgive quickly, kiss slowly. Love truly. Laugh uncontrollably and never regret ANYTHING that makes you smile.',
    source: 'Mark Twain'
  },
  { quote: 'It is dangerous to be right in matters where established men are wrong.',
    source: 'Voltaire',
    citation: 'The Age of Louis XIV',
    year: 1751
  },
  { quote: 'Bank robbery is an initiative of amateurs. True professionals establish a bank.',
    source: 'Bertolt Brecht'
  },
  { quote: 'Computers are like Old Testament gods; lots of rules and no mercy.',
    source: 'Joseph Campbell',
    citation: 'The Power of Myth',
    year: 1988
  }
];


// This function randomly returns a value between 0 and the highest index of the quotes array

function getRandomQuote () {
  var index = Math.ceil(Math.random() * (quotes.length - 1));
  return quotes[index];
}

/***
 * `printQuote` function
***/
function printQuote() {
  var outputDiv = document.getElementById('quote-box');
  var message = ' ';
  var randomQuote = getRandomQuote();
  message += '<p class="quote">'+randomQuote.quote+'</p>'
  message += '<p class="source">'+randomQuote.source
    if (randomQuote.citation !=null) {
      message += '<span class="citation">'+randomQuote.citation+'</span>'
    }
    if (randomQuote.year !=null) {
      message += '<span class="year">'+randomQuote.year+'</span>'
    }
    message +='</p>'
  outputDiv.innerHTML = message;
}

// calling the printQuote function once when loading the page so it isn't "empty"
printQuote();

/***
Nicely provided by Team Treehouse, this line of code turns a HTMl-object into
a clickable button which calls the printQuote function.
***/

document.getElementById('load-quote').addEventListener('click', printQuote, false);
