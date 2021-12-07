import React from 'react';
import { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import {TransitionablePortal, Segment, Button, Header, Icon, Embed} from 'semantic-ui-react';
import oti from '../../images/oti.jpeg';
import ReactPlayer from 'react-player/youtube'
import { Link } from 'react-router-dom';


const CompanyMenu = () => {

    const [activeItem, setActiveItem] = useState('')

    const [active, setActive] = useState(false)

    const aboutOnClick = () =>{
        setActive(prevActive => !prevActive)
    }
    const handleItemClick = (e, {name}) =>{
        setActiveItem(name)
    }
    const onclose = () => {
        setActive(prevActive => false)
    }


    return (
        <div>
            <Menu secondary fluid widths={4}>
              <Menu.Item
                    name='About OTI'
                    active={activeItem === 'aboutoti'}
                    onClick={aboutOnClick}
                 >
                </Menu.Item>
                  <TransitionablePortal
                  open={active}
                  transition={{animation: 'zoom', duration: 500}}>
                   <Segment
                    style={{
                        left: '20%',
                        position: 'fixed',
                        top: '20%',
                        zIndex: 5000,
                        width: '100vh'
                    }}
                   >
                     <ReactPlayer url='https://www.youtube.com/watch?v=fBMCqWwHOkA' 
                                 placeholder={oti}
                    />
                    {/* <Embed 
                        source="youtube"
                        url="https://www.youtube.com/watch?v=fBMCqWwHOkA"
                        placeholder={oti}
                    /> */}
                      <Button basic animated color='green' style={{marginLeft: '40%', marginTop: '10px'}} onClick={onclose}>
                        <Button.Content visible>Close</Button.Content>
                        <Button.Content hidden>
                            <Icon name='window close outline' />
                        </Button.Content>
                      </Button>
                    </Segment>
                </TransitionablePortal>
              

                <Menu.Item
                    name='Auditorium'
                    active={activeItem === 'auditorium'}
                    onClick={handleItemClick}
                    as={Link}
                    to="/auditorium"
                />
                <Menu.Item
                    name='Notice Board'
                    active={activeItem === 'noticeboard'}
                    onClick={handleItemClick}
                    as={Link}
                    to="/notice"
                />
                 <Menu.Item
                    name='My Workspace'
                    active={activeItem === 'departments'}
                    onClick={handleItemClick}
                    as={Link}
                    to="/departments"
                />
            </Menu>
           
        </div>
    )
}

export default CompanyMenu;
