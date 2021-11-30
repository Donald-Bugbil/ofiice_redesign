import React from 'react';
import { Header } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
import coming1 from '../../images/comingsoon1.jpg';

function Auditorium() {
    return (
        <div>
          <Header as='h1'>SOMETHING AWESOME IS COMING</Header>
           <Header as='h3'>It's going to be amazing!! Keep your fingers crossed!!!</Header>
           <img src={coming1}/>
        </div>
    )
}

export default Auditorium
