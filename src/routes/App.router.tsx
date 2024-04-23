
import { Login } from '@components/Login/Login'
import Layout from '@views/Layout.view'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


export default function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>} />
                <Route path="/#login" element={<Login/>} />
                <Route path="*" element={<Layout/>} />
                
            </Routes>
        </BrowserRouter>
    )
}
