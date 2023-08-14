import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'

function Main() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Main