import React, {Fragment, useState } from 'react'
import {Card,CardContent,Typography,CardActions,Button,Grid, DialogActions} from '@material-ui/core'
import { getMatchdetail } from '../api/Api'
import {Dialog,DialogTitle,DialogContent,DialogContentText} from '@material-ui/core'

export default function Mycard({match}) {
    const [detail,setDetail]=useState({});
    const [open,setOpen]=useState(false);
    const handleClick=(id)=>{
        getMatchdetail(id).then((data)=>{
            setDetail(data);
            handleOpen()
        }).catch((error)=>console.error(error));
    }
    const getMatchCard=()=>{
        return (
            <Card style={{marginTop:85}}>
                <CardContent>
                    <Grid container justify="center" spacing={4}>
                    <Grid item>
                        <Typography  variant="h5">{match["team-1"]}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>image</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5">{match["team-2"]}</Typography>
                    </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justify="center" spacing={3}>
                    <Button variant="outlined" color="primary" onClick={()=>{handleClick(match.unique_id);}}>Show Detail</Button>
                    <Button variant="outlined" color="primary">Start Time{new Date(match.dateTimeGMT).toLocaleString()}</Button>
                    </Grid>
                </CardActions>
            </Card>
        )
    }
    const handleClose=()=>{
        setOpen(false);
    }
    const handleOpen=()=>{
        setOpen(true);
    }

    const getDialog=()=>{
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">{"Match Detail .."}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                <Typography>{detail.stat}</Typography>
                <Typography>Match<span style={{fontStyle:"italic",fontWeight:"bold"}}> {detail.matchStarted ?"Started" : "Still Not Started"}{" "}</span></Typography>
                <Typography>Match<span style={{fontStyle:"italic",fontWeight:"bold"}}> {detail.score}</span></Typography>

                </DialogContentText>
                <DialogActions>Close</DialogActions>
            </DialogContent>
        </Dialog>
    }
    return (
        <Fragment>
        {getMatchCard()}
        {getDialog()}

        </Fragment>
    )
}
