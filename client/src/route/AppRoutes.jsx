import { Route, Routes } from 'react-router-dom';
import BasicLayout from '../layout/BasicLayout'
import Home from '../pages/Home'
import Developer from '../pages/Developer';
import Login from '../pages/Login';
import SignUp from '../pages/Signup';
import Intro from '../pages/dashboard/Intro';
import DashboardLayouts from '../layout/DashboardLayout';
import PrivateRoute from './PrivateRoute';
import Interview from '../pages/dashboard/Interview';


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<BasicLayout />}>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/devinfo" element={<Developer/>} />
                <Route path="/signup" element={<SignUp/>} />

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
      </Route>
        </Routes>
    )
}
