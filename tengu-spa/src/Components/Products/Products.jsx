import React from 'react'
import {Grid} from '@material-ui/core'
import Product from "./Product/Product";
import {MODEL_ONE, MODEL_THREE, MODEL_TWO} from "../../assets/Picture";
import useStyles from './styles'

const products=[
    {id:1,name:"just Hoody", description:"Model Tengu#1",price:"5$",image:MODEL_ONE},
    {id:2,name:"Hoody cool one", description:"Model Tengu#2",price:"5$",image: MODEL_TWO},
    {id:3,name:"Hoody JoJo", description:"Model Tengu#3",price:"5$",image:MODEL_THREE},
]

export default ({productsa}) => {
    const classes = useStyles();
    console.log(productsa)

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

