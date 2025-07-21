import { Route, Routes } from 'react-router-dom';
import BasicLayout from '../layout/BasicLayout'
import Home from '../pages/Home'
import Login from '../pages/Login';
import SignUp from '../pages/Signup';
import Intro from '../pages/dashboard/Intro';
import DashboardLayouts from '../layout/DashboardLayout';
import PrivateRoute from './PrivateRoute';
import Interview from '../pages/dashboard/Interview';
import Developer from '../pages/dashboard/Developer';
import About from '../pages/About';


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<BasicLayout />}>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/about" element={<About/>} />
            </Route>

            <Route
        path="/dashboard"
        element={(
          <PrivateRoute>
            <DashboardLayouts/>
          </PrivateRoute>)}
      >
        <Route path="/dashboard/intro" element={<Intro/>} />
        <Route path="/dashboard/inter" element={<Interview/>} />
        <Route path="/dashboard/devel" element={<Developer/>} />
      </Route>
        </Routes>
    )
}
