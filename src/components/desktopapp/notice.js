import React from 'react';
import { Header } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
import coming from '../../images/comingsoon.jpg'

function Notice() {
    return (
        <div>
           <Header as='h1'>SLIDE SHOWING NOTICE BOARD. SOON ON YOUR SCREENS</Header>
           <img  src={coming}/>
        </div>
    )
}

export default Notice
