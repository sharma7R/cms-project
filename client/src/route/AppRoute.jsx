import { Route, Routes } from 'react-router-dom';
import BasicLayout from '../layout/BasicLayout'
import Home from '../pages/Home'
import Signinup from '../pages/Signinup';
import Developer from '../pages/Developer';
import Signup from '../pages/Signup';


export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<BasicLayout />}>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Signinup/>} />
                <Route path="/devinfo" element={<Developer/>} />
                <Route path="/signup" element={<Signup/>} />

            </Route>
        </Routes>
    )
}
