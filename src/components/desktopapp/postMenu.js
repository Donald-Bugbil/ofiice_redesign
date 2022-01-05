import React from 'react';
import {Menu} from 'semantic-ui-react';
import {useState} from 'react';
import Feeds from '../desktopapp/feed'

const PostMenu = () =>{

    const[activeItem, setActiveItem] = useState('live wall')

    const handleItemClick = (e, {name}) =>{
        return setActiveItem(name)
    }
    
     const [active, setActive] = useState(true)

    const OnShow = () =>{
        return setActive(prevActive => !prevActive)
    }
    
    // const onclose = () => {
    //     setActive(prevActive => true)
    // }

    return (
        <div>
        <Menu secondary pointing fluid widths={2}>
            <Menu.Item
                name="live wall"
                active={activeItem === 'live wall'}
                onClick={handleItemClick}
                >
            Live Wall
            </Menu.Item>
           
            <Menu.Item
                name="networking"
                active={activeItem === 'networking'}
                onClick={handleItemClick}
                >
                Networking
            </Menu.Item>

           
        </Menu>
        {
            activeItem === "live wall" ? <Feeds/>: 'none'
        }
        </div>
    )
}

export default PostMenu;