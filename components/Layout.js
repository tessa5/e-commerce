import React, { useContext } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import NextLink from 'next/link'
import logo from '../public/logo.png'
import { AppBar, Container, Link, Toolbar, Typography, Switch } from '@mui/material'
import {ThemeProvider,CssBaseline,  createTheme } from '@material-ui/core'
import useStyles from '../utils/styles'
import { Store } from '../utils/Store'
import Cookies from 'js-cookie'


function Layout({title, children, description}) {
const {state, dispatch} = useContext(Store);
const {darkMode} = state;

    const theme = createTheme({
        typography: {
            h1: {
                fontSize: '1.4rem',
                fontWeight: 'bold',
                margin: '1rem 0',
            },
            h2: {
                fontSize: '1rem',
                fontWeight: 'light',
                margin: '1rem 0',
            },
        },
        palette: {
            type: darkMode ? 'dark' : 'light',
            primary: {
                main: '#aa86f7'
            },
            secondary: {
                main: '#3400a3'
            },
        },
    });
    const classes = useStyles()
    const darkModeChange = () => {
        dispatch({type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON'})
        const newMode = !darkMode;
        Cookies.set('darkMode', newMode? 'ON' : 'OFF');
    }

    return (
        <div>
            <Head>
                <title>{title ? `${title} - The Tee Shop`: `The Tee Shop` }</title>
                {description && <meta name="description" content={description} />}
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                    <AppBar position ="sticky" className={classes.navbar}>
                        <Toolbar>
                            <NextLink href="/" passHref>
                                <Link>
                                <Image src={logo} 
                                    alt="logo"
                                    height="80"
                                />
                                </Link>
                            </NextLink>
                            <div className={classes.right_link}></div>
                            <div> 
                                <Switch checked={darkMode} onChange={darkModeChange}></Switch>
                            <NextLink href="/" passHref>
                                <Link>
                                Cart
                                </Link>
                            </NextLink>
                            <NextLink href="/" passHref>
                                <Link>
                                Login
                                </Link>
                            </NextLink>
                            </div>

                        </Toolbar>
                    </AppBar>
                    <Container className={classes.main}>
                        {children}
                    </Container>
                    <footer className={classes.footer}>
                        <Typography>All rights reserved. Tee-Shop</Typography>
                    </footer>
            </ThemeProvider>
        </div>
    )
}

export default Layout
