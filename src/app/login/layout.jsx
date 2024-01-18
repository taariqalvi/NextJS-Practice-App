import React from 'react'

const Layout = ({ children }) => {
    return (
        <div>
            <h2>Layout for only Login screens</h2>
            {children}
        </div>
    )
}

export default Layout