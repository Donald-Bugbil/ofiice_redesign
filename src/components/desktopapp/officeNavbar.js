import React from 'react';
import { useState } from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import Home from './home';
import oti from '../../images/oti.jpeg';
const Navbar = () => {

    const [activeItem, setActiveItem] = useState('home')
    const handleItemClick = (e, { name }) => {
        setActiveItem(name)
    }
    console.log(activeItem)
    return (
        <div>
            <Menu icon='labeled' secondary pointing fluid widths={10} >
                    <Menu.Item position="left">
                        <img src={oti}/>
                    </Menu.Item>

                <Menu.Item
                    name='archive'
                    active={activeItem === 'archive'}
                    onClick={handleItemClick}
                    color={`${activeItem === 'archive' ? 'yellow' : 'none'}`}
                    link
                    
                >
                    <Icon name='archive' />
          Archive
        </Menu.Item>

                <Menu.Item
                    name='chats'
                    active={activeItem === 'chats'}
                    onClick={handleItemClick}
                    color={`${activeItem === 'chats' ? 'yellow' : 'none'}`}
                    link
                >
                    <Icon name='comments' />
          Chats
        </Menu.Item>
                <Menu.Item
                    name='tasks'
                    active={activeItem === 'tasks'}
                    onClick={handleItemClick}
                    color={`${activeItem === 'tasks' ? 'yellow' : 'none'}`}
                    link
                >
                    <Icon name='tasks' />
          Tasks
        </Menu.Item>

                <Menu.Item
                    name='wall'
                    active={activeItem === 'wall'}
                    onClick={handleItemClick}
                    color={`${activeItem === 'wall' ? 'yellow' : 'none'}`}
                    link
                >
                    <Icon name='newspaper' />
          Wall
        </Menu.Item>

                <Menu.Item
                    name='users'
                    active={activeItem === 'users'}
                    onClick={handleItemClick}
                    color={`${activeItem === 'users' ? 'yellow' : 'none'}`}
                    link
                >
                    <Icon name='users' />
          Workers
        </Menu.Item>
                <Menu.Item
                    name='coffee'
                    active={activeItem === 'coffee'}
                    onClick={handleItemClick}
                    color={`${activeItem === 'coffee' ? 'yellow' : 'none'}`}
                    link
                >
                    <Icon name='food' />
          Lunch Break
        </Menu.Item>
                <Menu.Item
                    name='user'
                    active={activeItem === 'user'}
                    onClick={handleItemClick}
                    position="right"
                    color={`${activeItem === 'user' ? 'yellow' : 'none'}`}
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