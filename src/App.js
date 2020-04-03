import React, { useState } from 'react';
import './App.scss';

import { quotes } from './Data/quotes';

// Component Imports
import QuoteContainer from './Components/QuoteContainer';


function App() {
  const [index, setIndex] = useState(Math.floor(Math.random() * quotes.length));

  const randomNum = () => {
    const newNum = Math.floor(Math.random() * quotes.length);
    setIndex(newNum)
  }

  return (
    <div className="App">
      <QuoteContainer quote={quotes[index]} newQuote={randomNum} />
    </div>
  );
}

export default App;
