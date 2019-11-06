
/* This is the array containing the quote objects, consisting of the quote itself,
the source, one or more tags plus citation and year if available.
*/
var quotes = [
  { quote: 'No man is rich enough to buy back his past.',
    source: 'Oscar Wilde',
    tag: ['philosophical']
  },
  { quote: 'Freedom is the recognition of necessity.',
    source: 'Friedrich Engels',
    citation: 'Herrn Eugen Dührings Umwälzung der Wissenschaft',
    year: 1878,
    tag: ['politics']
  },
  { quote: 'Life is short, break the rules. Forgive quickly, kiss slowly. Love truly. Laugh uncontrollably and never regret ANYTHING that makes you smile.',
    source: 'Mark Twain',
    tag: ['motivational', 'life']
  },
  { quote: 'It is dangerous to be right in matters where established men are wrong.',
    source: 'Voltaire',
    citation: 'The Age of Louis XIV',
    year: 1751,
    tag: ['historical', 'society', 'philosophical']
  },
  { quote: 'Bank robbery is an initiative of amateurs. True professionals establish a bank.',
    source: 'Bertolt Brecht',
    tag: ['politics', 'finance']
  },
  { quote: 'Computers are like Old Testament gods; lots of rules and no mercy.',
    source: 'Joseph Campbell',
    citation: 'The Power of Myth',
    year: 1988,
    tag: ['humor', 'IT']
  }
];

var callingFirstTime = true;

// This function randomly returns a value between 0 and the highest index of the quotes array
function getRandomQuote() {
  var index = Math.ceil(Math.random() * (quotes.length - 1));
  return quotes[index];
}

// This function changes the body color by creating a string with 3 randomly generated rgb color values
function randomColor() {
  if (callingFirstTime==false){
    var rgb ="rgb(";
      for (i=1; i<=3; i++){
      rgb += Math.ceil(Math.random() * 255);
        if (i<3){
        rgb += ', '
      }
    }
    document.body.style.backgroundColor = rgb+')';
  }
}

// ...it prints to the quote-box element
function print(message){
  var outputDiv = document.getElementById('quote-box');
    outputDiv.innerHTML = message;
}
/*
 The infamous printQuote-function, which...prints a concatenated string,
 containing the different attributes of the quote-object
*/
function printQuote() {
  var output = ' ';
  var randomQuote = getRandomQuote();
  var tags = randomQuote.tag;
  output += '<p class="quote">'+randomQuote.quote+'</p>'
  output += '<p class="source">'+randomQuote.source
    if (randomQuote.citation !=null) {
      output += '<span class="citation">'+randomQuote.citation+'</span>'
    }
    if (randomQuote.year !=null) {
      output += '<span class="year">'+randomQuote.year+'</span>'
    }
    output +='</p>'
    /* should print a list of tags with a clickable link on them. Real links
    still need to be added, wait for v1.1
    */
    output += '<p class="tags">Tags: '
    for (var i=0; i<tags.length; i++) {
      output += '<a href=#>'+tags[i]+'</a>'
      if (i<(tags.length)-1){
        output += ', '
      }
    }
    '</p>'
    print(output)
    randomColor();
}

// calling the printQuote function once when loading the page so it isn't "empty"
printQuote();

var callingFirstTime = false;

// setting a 20sec interval after which printQuote will be automatically executed
var intervalID = window.setInterval(printQuote, 20000);

/*
Kindly provided by Team Treehouse, this line of code turns a HTMl-object into
a clickable button which calls the printQuote function. Great!
*/

document.getElementById('load-quote').addEventListener('click', printQuote, false);
