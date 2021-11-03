import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Logo from'./gmail_logo.png';
import './Header.css'
import ClearIcon from '@material-ui/icons/Clear';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Header = () => {

    return ( 
        <div className='header'>
            <div className='hearder_left'>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img
                    src={Logo}
                    alt='Gmail logo'
                />
            </div>
            <div className='hearder_middle'>
                <SearchIcon />
                <input 
                    placeholder='Search email'
                    type='text'
                />
               <ClearIcon />
            </div>
            <div className='hearder_right'>
                <IconButton> 
                    <AppsIcon />
                </IconButton>
                <IconButton> 
                    <NotificationsIcon />
                </IconButton>
                <AccountCircleIcon />
            </div>
        </div>
    )
}

export default Header