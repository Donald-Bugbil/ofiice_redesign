import React from 'react';
import { useState } from 'react';
import { Menu } from 'semantic-ui-react';

const CompanyMenu = () => {

    const [activeItem, setActiveItem] = useState('')
    
    const handleItemClick = (e, {name}) =>{
        setActiveItem(name)
    }
    return (
        <div>
            <Menu secondary fluid widths={3}>
                <Menu.Item
                    name='buy'
                    active={activeItem === 'buy'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='sell'
                    active={activeItem === 'sell'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='rent'
                    active={activeItem === 'rent'}
                    onClick={handleItemClick}
                />
            </Menu>
        </div>
    )
}

export default CompanyMenu;