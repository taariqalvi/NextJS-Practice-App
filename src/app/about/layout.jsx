'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import './about.css'

const Layout = ({ children }) => {
    const pathName = usePathname()
    console.log(pathName)
    return (
        <div>
            <h2>Layout & Conditional Layout Navbar for only about screens</h2>
            {
                pathName !== "/about/aboutteacher" ?
                    <ul className='about-menu'>
                        <li><h4>About Navbar</h4></li>
                        <li><Link href="/about">About Page</Link></li>
                        <li><Link href="/about/aboutstudent">About Studnt Page</Link></li>
                        <li><Link href="/about/aboutteacher">About Teacher Page</Link></li>
                    </ul>
                    : <p>Conditional Layout. We can hide any layout conditionally for a specifice component with the help of ternary ? operator</p>
            }
            {children}
        </div>
    )
}

export default Layout