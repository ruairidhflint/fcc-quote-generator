import React from 'react';

function QuoteDisplay({ quote, author }) {
  return (
    <div class="quote-display">
      <h1>{quote}</h1>
      <h2>{author}</h2>
    </div>
  );
}

export default QuoteDisplay;
