import React from 'react';
import { Header } from 'semantic-ui-react';
import coming2 from '../../images/coming2.jpg'

function Notice() {
    return (
        <div>
         <Header style={{color: '#0419b4', marginTop: '30px', marginLeft: '320px' }}as='h1'>
          GET READY FOR NEWLY DESIGNED NOTICE BOARD 
          <br/>
          SOON ON YOUR SCREENS!
         </Header>
         <br/>
          <img style={{width: '220vh'}} src={coming2}/>
        </div>
    )
}

export default Notice
