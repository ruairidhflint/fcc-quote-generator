import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function Buttons({ newQuote }) {
    const generateNewQuote = (e) => {
        e.preventDefault();
        newQuote();
    }
  return (
    <div className="buttons">
      <a href="https://twitter.com/intent/tweet" id="tweet-quote">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <button onClick={generateNewQuote} id="new-quote">New Quote</button>
    </div>
  );
}

export default Buttons;
