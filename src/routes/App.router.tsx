import Layout from '@views/Layout.view'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


export default function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>} />
                <Route path="/login" element={<Layout/>} />
                <Route path="*" element={<Layout/>} />
                
            </Routes>
        </BrowserRouter>
    )
}
