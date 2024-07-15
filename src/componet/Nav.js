import React, { useState } from 'react'
// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, useLocation } from 'react-router-dom';

const pages = ['home', 'about', 'servises', 'solutions', 'portfolio', 'news', 'contect us', '+1 (800) 987 6543'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
function Nav() {

    const location = useLocation();
    const [colorname, setcolor] = useState(location.pathname == "/")


    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>

            <AppBar position="static" sx={{height:"100px", backgroundColor: colorname ? "transparent" : "white", boxShadow: "0px 0px 0px", position:colorname? "absolute":"relative", top: "0", zIndex: "999" }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <a
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                textDecoration: 'none',

                            }}
                        >
                            <img

                                src=
                                {
                                    colorname ? "https://demo18.houzez.co/wp-content/themes/houzez/img/logo-houzez-white.png" :"https://demo18.houzez.co/wp-content/uploads/2020/09/logo-houzez-color-1.png"
                                }
                                alt="LOGO"
                                style={{
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    width: 'auto',
                                    height: '30px',
                                }}
                            />
                        </a>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', justifyContent: "flex-end" } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                sx={{color:colorname ? "white" : "black"}}
                                
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >

                                {pages.map((page) => (
                                    <Link to={(page === "home") ? "/" : `/${page}`}style={{textDecoration:"none",color:"black"}} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </Link>
                                ))}
                            </Menu>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: "flex-end" } }}>
                            {pages.map((page) => (
                                 <Link to={(page === "home") ? "/" : `/${page}`}style={{textDecoration:"none",margin:"10px",color:colorname?'white':"black"}} onClick={handleCloseNavMenu}>
                                 <Typography textAlign="center">{page}</Typography>
                             </Link>
                            ))}
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default Nav