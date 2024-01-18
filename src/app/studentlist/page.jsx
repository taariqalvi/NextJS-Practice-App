import Link from 'next/link'
import React from 'react'

const StudentList = () => {
    return (
        <div>
            <h1>Student List</h1>
            <ul>
                <li><Link href="/studentlist/Anil">Anil</Link></li>
                <li><Link href="/studentlist/Pritum">Pritum</Link></li>
                <li><Link href="/studentlist/Bhaskar">Bhaskar</Link></li>
                <li><Link href="/studentlist/Patel">Patel</Link></li>
            </ul>
        </div>
    )
}

export default StudentList