import {AppBar, Box, Toolbar} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import React from "react";
import {Link} from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';

const Menu = () => {
    const jwt = window.localStorage.getItem('jwt');
    return <AppBar position="static" style={{backgroundColor: 'black'}}>
        <Toolbar>
            <Box display="flex" style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%'
            }}>
                <Link to="/"><HomeIcon style={{color: 'white', fontSize: 30}}/></Link>
                {jwt !== null ? <Link to="/userProfile">

                        <Avatar alt={"Lava Golem"}
                                src="https://images.hdqwalls.com/wallpapers/the-cyberpunk-girl-cosplay-4k-9f.jpg"
                                style={{marginRight: 10}}/>
                    </Link> :
                    <Link to={'register'} >Register | Login</Link>}
            </Box>
        </Toolbar>
    </AppBar>
}
export default Menu;