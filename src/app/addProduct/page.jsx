"use client"
import Link from "next/link";
import "../globals.css";
import { useState } from "react";

export default function AddProduct() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [company, setCompany] = useState("");
    const [color, setColor] = useState("");
    const [category, setCategory] = useState("");

    const AddProduct = async () => {
        const result = await fetch("http://localhost:3000/api/products", {
            method: "POST",
            body: JSON.stringify({ name, price, company, category, color, category })
        });
        const response = await result.json();

        // Emptying input fields and showing a success message:
        setName("");
        setPrice("");
        setCompany("");
        setColor("");
        setCategory("");
        alert("Date successfully added to Mongo Database");
    }

    return (
        <div>
            <Link href="/">Go to Home Page</Link>
            <h2>Add Products to Mongo Database</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter product name" className="input" />
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter product price" className="input" />
            <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter product company" className="input" />
            <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="Enter product color" className="input" />
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter product category" className="input" />

            <button type="button" className="input" onClick={AddProduct}>Add Product</button>
        </div>
    )
}