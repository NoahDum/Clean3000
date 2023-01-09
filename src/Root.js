import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from "./App"
import NewAvis from './components/NewAvis'

const Root = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route path='/newAvis' element={<NewAvis/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Root