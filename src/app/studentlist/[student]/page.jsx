'use client'

import Link from "next/link"

const Student = ({ params }) => {
    console.log(params)
    return (
        <div>
            <h1>Individual Student Detail</h1>
            <h3>Name: {params.student}</h3>
            <Link href="/studentlist">Go to Student List</Link>
        </div>
    )
}

export default Student