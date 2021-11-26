import React from 'react';
import { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import {TransitionablePortal, Segment, Button, Header, Icon, Embed} from 'semantic-ui-react';
import oti from '../../images/oti.jpeg';
import ReactPlayer from 'react-player/youtube'

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
                />
                <Menu.Item
                    name='Auditorium'
                    active={activeItem === 'auditorium'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='Notice Board'
                    active={activeItem === 'noticeboard'}
                    onClick={handleItemClick}
                />
                 <Menu.Item
                    name='Departments'
                    active={activeItem === 'departments'}
                    onClick={handleItemClick}
                />
            </Menu>
            <TransitionablePortal
                open={active}
                transition={{animation: 'zoom', duration: 500}}
            >
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
                    <Button basic animated color='yellow' style={{marginLeft: '40%', marginTop: '10px'}} onClick={onclose}>
                        <Button.Content visible>Close</Button.Content>
                        <Button.Content hidden>
                            <Icon name='window close outline' />
                        </Button.Content>
                    </Button>
                </Segment>
            </TransitionablePortal>
        </div>
    )
}

export default CompanyMenu;
