import React from 'react';

function QuoteDisplay({ quote, author }) {
  const resizeStyle = quote.length > 180 ? '2.9rem' : '3.5rem';
  console.log(quote.length);
  return (
    <div className="quote-display">
      <h1 style={{fontSize: resizeStyle}} id="text">{quote}</h1>
      <h2 id="author">{author}</h2>
    </div>
  );
}


export default QuoteDisplay;
