'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Page = () => {
    const router = useRouter()
    return (
        <div>
            <h1 className='heading'>About Page</h1>
            <button type='button' onClick={() => router.push("/")}>Go to Home Page</button>
        </div>
    )
}

export default Page