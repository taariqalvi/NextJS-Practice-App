'use client'
import { useEffect, useState } from "react"

const ProductList = () => {
    const [product, setProduct] = useState([])

    useEffect(async () => {
        let data = await fetch("https://dummyjson.com/products")
        data = await data.json()
        console.log(data)
        setProduct(data.products)
    }, [])

    return (
        <div>
            <h1>Product List - Fetching data with client component</h1>
            {product.map((item) => (
                <h2>Name: {item.title}, Price: {item.price} </h2>
            ))}
        </div>
    )
}

export default ProductList