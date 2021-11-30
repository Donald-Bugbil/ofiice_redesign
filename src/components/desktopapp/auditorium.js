import React from 'react';
import { Image } from 'semantic-ui-react';
import coming1 from '../../images/comingsoon1.jpg';

function Auditorium() {
    return (
        <div>
           <h1>SOMETHING AWESOME IS COMING</h1> 
           <h4>It's going to be amazing!! Keep your fingers crossed!!!</h4>
           <img src={coming1}/>
        </div>
    )
}

export default Auditorium
