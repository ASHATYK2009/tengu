import React from 'react'
import {Card,CardMedia,CardContent,CardActions,Typography,IconButton} from '@material-ui/core'
import {AddShoppingCart} from "@material-ui/icons";
import useStyles from './styles'


export default ({product}) =>{
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image} title={product.name}/>
            <CardContent>
                <Typography className={classes.cardContent} variant={"h5"} gutterBottom={true}>
                    {product.name}
                </Typography>
                <Typography variant={"h5"}>
                    {product.price}
                </Typography>
                <Typography variant={"body2"} color={"textSecondary"}>
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions} disableSpacing={true}>
                <IconButton aria-label={"Add to Card"}>
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>
        </Card>

    )

}