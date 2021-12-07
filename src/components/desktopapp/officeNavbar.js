import React from 'react';
import { useState } from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import Home from './home';
import oti from '../../images/oti.jpeg';
import {TransitionablePortal, Segment, Button, Header} from 'semantic-ui-react';
import Headers from '../desktopapp/header'

const Navbar = () => {

    const [activeItems, setActiveItems] = useState('home')
    const handleItemsClick = (e, { name }) => {
        setActiveItems(name)
    }
    console.log(activeItems)
    

    return (
        <div> 
            {/* <Headers/> */}
            <Menu icon='labeled' secondary pointing fluid widths={10} >
                    <Menu.Item position="left">
                        <img src={oti}/>
                    </Menu.Item>
                    
                    <Headers/>

                <Menu.Item
                    name='archive'
                    active={activeItems === 'archive'}
                    onClick={handleItemsClick}
                    color={`${activeItems === 'archive' ? 'green' : 'none'}`}
                    link
                    
                >
                    <Icon name='archive' />
          Archive
        </Menu.Item>
                <Menu.Item
                    name='chats'
                    active={activeItems === 'chats'}
                    onClick={handleItemsClick}
                    color={`${activeItems === 'chats' ? 'green' : 'none'}`}
                    link
                >
                    <Icon name='comments' />
          Chats
        </Menu.Item>
                <Menu.Item
                    name='tasks'
                    active={activeItems === 'tasks'}
                    onClick={handleItemsClick}
                    color={`${activeItems === 'tasks' ? 'green' : 'none'}`}
                    link
                >
                    <Icon name='tasks' />
          Tasks
        </Menu.Item>

                <Menu.Item
                    name='agenda'
                    active={activeItems === 'agenda'}
                    onClick={handleItemsClick}
                    color={`${activeItems === 'agenda' ? 'green' : 'none'}`}
                    link
                >
                    <Icon name='calendar check' />
          Agenda
         </Menu.Item>

                 {/* <Menu.Item
                    name='users'
                    active={activeItems === 'users'}
                    onClick={handleItemsClick}
                    color={`${activeItems === 'users' ? 'green' : 'none'}`}
                    link
                >
                    <Icon name='users' />
          Workers
        </Menu.Item>  */}
                <Menu.Item
                    name='food'
                    active={activeItems === 'food'}
                    onClick={handleItemsClick}
                    color={`${activeItems === 'food' ? 'green' : 'none'}`}
                    link
                >
                    <Icon name='food' />
          Lunch Break
        </Menu.Item>
                <Menu.Item
                    name='user'
                    active={activeItems=== 'user'}
                    onClick={handleItemsClick}
                    position="right"
                    color={`${activeItems === 'user' ? 'green' : 'none'}`}
                    link
                >
                    <Icon name='user' />
          My Account
        </Menu.Item>

            </Menu>
            <Home/>
        </div>
    )
}



export default Navbar;