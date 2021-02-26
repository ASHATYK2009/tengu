import React from "react"
import {AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography} from "@material-ui/core";
import {ShoppingCart} from '@material-ui/icons'
import useStyles from './styles'
import {TENGU_STORE_LOGO} from "../../assets/Picture";

export default () =>{
    const classes = useStyles();
    return (
        <>
            <AppBar position={"fixed"} className={classes.appBar} color={"inherit"}>
                <Toolbar>
                    <Typography variant={"h6"} className={classes.title} color={"inherit"}>
                        <img src={TENGU_STORE_LOGO} height={"25px"} className={classes.image}/>
                        Tengu store
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                        <IconButton aria-label={"show cart items"} color={"inherit"}>
                            <Badge badgeContent={2} color={"secondary"}>
                                <ShoppingCart />
                            </Badge>

                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>


    )
}