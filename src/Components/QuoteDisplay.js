import React from 'react';

function QuoteDisplay({ quote, author }) {
  return (
    <div class="quote-display">
      <h1 id="text">{quote}</h1>
      <h2 id="author">{author}</h2>
    </div>
  );
}

export default QuoteDisplay;
