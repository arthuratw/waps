import { Routes, Route } from 'react-router-dom';
import { useAuth } from './context/useAuth';
import { DeafaultLayout } from './layouts/DefaultLayout';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login';
import { Avaible } from './pages/Avaible';
import { ProtectedRoute, ProtectedRouteProps } from './ProtectedRoute';
import { LogedDeafaultLayout } from './layouts/LogedDefaultLayout';
import { SignUp } from './pages/SignUp';
import { EmployeerList } from './pages/EmployeerList';
import { SectorList } from './pages/SectorList';
import CreateEmployeer from './pages/CreateEmployeer';


export function Router() {
    const auth = useAuth()
    const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
        isAuthenticated: auth.authenticated,
        authenticationPath: '/',
      };

    return (
        <Routes>
            <Route path='/' element={<DeafaultLayout />} >
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SignUp/>} />
            </Route>

            <Route path='/home' element={ <ProtectedRoute {...defaultProtectedRouteProps} outlet={<LogedDeafaultLayout/>}></ProtectedRoute>}>
                <Route path='/home' element={<Home/>}/>
                <Route path="/home/avaible" element={<Avaible/>}/>
                <Route path="/home/employeerlist" element={<EmployeerList/>}/>
                <Route path="/home/sectorlist" element={<SectorList/>}/>
                <Route path='/home/employeerlist/createemployeer' element={<CreateEmployeer/>} />
            </Route>

        </Routes>
    )
}