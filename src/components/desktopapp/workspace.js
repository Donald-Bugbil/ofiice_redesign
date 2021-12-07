import React from 'react';
import { Header, Card, Button, Icon } from 'semantic-ui-react';
import businessdev from '../../images/businessdev.png';
import research from '../../images/research.png';
import coding from '../../images/coding.jpg';
import communications from '../../images/communications.jpg';
import account from '../../images/account.jpg';
import sales from '../../images/sales.jpg';

function Workspace() {
    return (
   
<div>
    <Header as='h1' style={{marginTop: '20px', marginLeft: '600px', color: 'yellowgreen'}}>
        OTI WORKSPACE
    </Header>
  <Card.Group style={{marginLeft: '140px'}}>
    <Card style={{marginTop: '30px', marginLeft: '50px'}}>
        <img src={businessdev}/>
      <Card.Content>
        <Card.Header content='Business and Development Department' />
        <Card.Meta content='Business & Development Team' />
        <Card.Description content='Overview of all other Departments' />
      </Card.Content>
       <Button color='olive'>Enter Workspace</Button>
    </Card>

    <Card  style={{marginTop: '30px', marginLeft: '50px'}}>
      <Card.Content>
           <img style={{height: '180px', width: '260px', border: 'none'}} src={research}/>
        <Card.Header style={{marginTop: '10px'}} content='Research Department' />
        <Card.Meta content='Research Team' />
        <Card.Description content='Responsible for all research related to OTI' />
      </Card.Content>
      <Button color='olive'>Enter Workspace</Button>
    </Card>

    <Card style={{marginTop: '30px', marginLeft: '50px'}}>
      <Card.Content>
           <img style={{height: '180px', width: '260px', border: 'none'}} src={coding}/>
        <Card.Header style={{marginTop: '10px'}} content='IT Department' />
        <Card.Meta content='Information & Technology Team' />
        <Card.Description content='Overview of all OTI related technologies' />
      </Card.Content>
      <Button color='olive'>Enter Workspace</Button>
    </Card>

    <Card style={{marginTop: '30px', marginLeft: '50px'}}>
      <Card.Content>
           <img style={{height: '180px', width: '260px', border: 'none'}} src={communications}/>
        <Card.Header style={{marginTop: '10px'}} content='Communication Department' />
        <Card.Meta content='Communications Team' />
        <Card.Description content='Responsible for all communications related to OTI' />
      </Card.Content>
      <Button color='olive'>Enter Workspace</Button>
    </Card>

    <Card style={{marginTop: '30px', marginLeft: '50px'}}>
      <Card.Content>
           <img  style={{height: '180px', width: '260px', border: 'none'}} src={account}/>
        <Card.Header style={{marginTop: '10px'}} content='Accounts Department' />
        <Card.Meta content='Accounts Team' />
        <Card.Description content='Responsible for all accounts related to OTI' />
      </Card.Content>
      <Button color='olive'>Enter Workspace</Button>
    </Card>

    <Card style={{marginTop: '30px', marginLeft: '50px'}}>
      <Card.Content>
           <img style={{height: '180px', width: '260px', border: 'none'}} src={sales}/>
        <Card.Header style={{marginTop: '10px'}} content='Sales Department' />
        <Card.Meta content='Sales Team' />
        <Card.Description content='Responsible for all sales related to OTI' />
      </Card.Content>
      <Button color='olive'>Enter Workspace</Button>
    </Card>
  </Card.Group>
  </div>
    )
}

export default Workspace
