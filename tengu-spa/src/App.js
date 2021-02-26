import React, {useEffect, useState} from 'react'
import Products from "./Components/Products/Products";
import Navbar from "./Components/Navbar/Navbar";
import {commerce} from "./lib/commersce";


export default () =>{
    const [products,setProducts] = useState([])

    // const fetchProducts = async () =>{
    //     const {productList} = await commerce.products.list()
    //     setProducts(productList)
    // }
    // useEffect(()=>{
    //     fetchProducts()
    // },[])

    return (
        <>
            <Navbar/>
            <Products/>
        </>
    )
}