import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Humor from "./Humor.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Journalism from "./Journalism.jsx";
import {Flowbite, Navbar, NavbarCollapse, NavbarLink, NavbarToggle} from "flowbite-react";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: 'about',
        element: <About/>
    },
    {
        path: 'humor',
        element: <Humor/>
    },
    {
        path: 'journalism',
        element: <Journalism/>
    },
    {
        path: 'contact',
        element: <Contact/>
    },
])

const flowbiteNavbarTheme = {
    "root": {
        "base": "px-2 py-2.5 sm:px-4",
        "rounded": {
            "on": "rounded",
            "off": ""
        },
        "bordered": {
            "on": "border",
            "off": ""
        },
        "inner": {
            "base": "mx-auto flex flex-wrap items-center justify-center",
            "fluid": {
                "on": "",
                "off": "container"
            }
        }
    },
    "brand": {
        "base": "flex items-center"
    },
    "collapse": {
        "base": "w-full md:block md:w-auto",
        "list": "m-0 mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8",
        "hidden": {
            "on": "hidden",
            "off": ""
        }
    },
    "link": {
        "base": "block py-2 md:p-0",
        "active": {
            "on": "bg-cyan-700 text-white md:bg-transparent md:text-cyan-700",
            "off": "text-[#3b3030]"
        },
        "disabled": {
            "on": "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
            "off": ""
        }
    },
    "toggle": {
        "base": "inline-flex items-center rounded-lg p-2 text-xl text-[#3b3030] focus:outline-none md:hidden",
        "icon": "h-5 w-5 shrink-0"
    }
}

function App() {
    return (
        <>
            <Flowbite>
                <Navbar fluid rounded theme={flowbiteNavbarTheme}>
                    <NavbarToggle/>
                    <NavbarCollapse>
                        <NavbarLink href="/">Home</NavbarLink>
                        <NavbarLink href="/about">About</NavbarLink>
                        <NavbarLink href="/humor">Humor</NavbarLink>
                        <NavbarLink href="/journalism">Journalism</NavbarLink>
                        <NavbarLink href="/contact">Contact</NavbarLink>
                    </NavbarCollapse>
                </Navbar>

                <div className="p-4">
                    <RouterProvider router={router}/>
                </div>
            </Flowbite>
        </>
    )
}

export default App
