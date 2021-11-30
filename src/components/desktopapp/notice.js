import React from 'react';
import { Image } from 'semantic-ui-react';
import coming from '../../images/comingsoon.jpg'

function Notice() {
    return (
        <div>
          <h1>SLIDE SHOWING NOTICE BOARD. SOON ON YOUR SCREENS</h1>
          <img  src={coming}/>
        </div>
    )
}

export default Notice
