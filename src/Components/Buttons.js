import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function Buttons() {
    return(
        <div class="buttons">
            <a href='https://twitter.com/intent/tweet' id="tweet-quote"><FontAwesomeIcon icon={faTwitter}/></a>
            <button id="new-quote">New Quote</button>
            
        </div>
    )
}

export default Buttons;