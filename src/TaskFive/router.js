import { Route, createRoutesFromElements,createBrowserRouter } from "react-router-dom"
import LoginPage from "./LoginPage"
import HodResister from "./HodResister"
import Home from "./Home"
import RootLayout from "./layout/RootLayout"

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>

            <Route index element={<Home/>} />
            <Route path="#" element={< HodResister />} />
           
        </Route >
    )
)

