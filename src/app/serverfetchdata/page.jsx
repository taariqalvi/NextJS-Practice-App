import Buttons from "./buttons"

// functions for fetching data:
const fectchData = async () => {
    let data = await fetch("https://dummyjson.com/products")
    data = await data.json()
    return data.products
}

const ServerFetchData = async () => {
    const products = await fectchData()
    return (
        <div>
            <h1>Server Component Fetch Data Page</h1>
            <h2>As we can not use hooks inside a Server component, so to fetch data we need to define a separate functions for fetching and then call it inside the component by making it async await function first.</h2>
            {
                products.map((item) => (
                    <div>
                        <h3>Name: {item.title}</h3>
                        <Buttons price={item.price} />
                    </div>
                ))
            }
        </div>
    )
}

export default ServerFetchData