import { Route, Routes } from 'react-router-dom';
import { CustomerOrdenes } from '../pages/CustomerOrdenes'
import { Navbar } from '../components/Navbar';
import App from "../App"
import { ErrorPage } from '../pages/ErrorPage';


export const AppRouter = () => {
    return (
        <>
            <Navbar></Navbar>
            <Routes>
                <Route path='/' element={<App />} errorElement={<ErrorPage/>} />
                <Route path='ordenes/:number' element={<CustomerOrdenes />}  errorElement={<ErrorPage/>} />
                <Route path="*" element={<App />} />
            </Routes>
        </>
    )
}
