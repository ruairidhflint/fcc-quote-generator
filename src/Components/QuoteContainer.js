import React from 'react';

import QuoteDisplay from './QuoteDisplay';
import Buttons from './Buttons';


function QuoteContainer({quote, newQuote}) {
  return (
    <div id="quote-box">
      <QuoteDisplay quote={quote.quote} author={quote.author} />
      <Buttons newQuote={newQuote}/>
    </div>
  );
}

export default QuoteContainer;
