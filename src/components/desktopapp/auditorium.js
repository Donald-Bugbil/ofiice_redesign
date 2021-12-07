import React from 'react';
import { Header } from 'semantic-ui-react';
import conference from '../../images/conference.jpg';


function Auditorium() {
    return (
        <div>
         <Header style={{color: '#204147', marginTop: '20px', marginLeft: '350px' }} as='h1'>
          SOMETHING AWESOME IS COMING. 
          <br/>
          It's going to be amazing! Keep your fingers crossed!!
         </Header>
         <br/>
          <img src={conference}/>
        </div>
    )
}

export default Auditorium
