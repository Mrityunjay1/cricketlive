import React from 'react'
import {AppBar,Toolbar,Typography} from '@material-ui/core';

export default function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h5">
                    Live Score
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
