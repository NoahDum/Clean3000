import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from "./App"

const Root = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Root