'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const Login = () => {
    const router = useRouter()
    return (
        <div>
            <h1>Login</h1>
            <button type='button' onClick={() => router.push("/")}>Go to Home Page</button>
        </div>
    )
}

export default Login