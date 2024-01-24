import { connectStr } from "@/mongodbfolder/db";
import { Product } from "@/mongodbfolder/model/productSchema";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    let data = [];
    await mongoose.connect(connectStr);
    data = await Product.find();
    return NextResponse.json({ products: data });
}

export async function POST(request) {
    const payload = await request.json();
    await mongoose.connect(connectStr);
    let product = new Product(payload);
    const saveProduct = await product.save();
    return NextResponse.json({ products: saveProduct });
}
