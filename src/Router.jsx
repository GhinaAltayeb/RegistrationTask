import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import Home from './Pages/Home'

function Router() {
    return (
        <Routes>
            <Route index element={<App />} />
            <Route path='home' element={<Home />} />
        </Routes>
    )
}

export default Router