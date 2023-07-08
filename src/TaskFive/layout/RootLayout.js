import React from 'react'
import { Outlet } from 'react-router-dom'
import LoginPage from '../LoginPage'

function RootLayout() {
    return (
        <>
            

            <div style={{ marginTop: "100px" }}>
                <Outlet />

                <LoginPage />
            </div >
        </>
    )
}

export default RootLayout