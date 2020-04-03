import React from 'react';

import QuoteDisplay from './QuoteDisplay'
import Buttons from './Buttons'

const dummyQuote = {
  quote: 'Life isn’t about getting and having, it’s about giving and being.',
  author: 'Kevin Kruse',
};

function QuoteContainer() {
  return (
  <div id="quote-box">
      <QuoteDisplay quote={dummyQuote.quote} author={dummyQuote.author} />
      <Buttons />
  </div>
  );

}

export default QuoteContainer;
