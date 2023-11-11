import { useEffect, lazy } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import { useAuth } from "hooks/index";
import { useDispatch } from "react-redux";
import { refreshUser } from "redux/auth/operations";
import { RotatingLines } from 'react-loader-spinner';
import { Layout } from "components/Layout/Layout";
import { RestrictedRoute } from "routes/RestrictedRoute";
import { PrivateRoute } from "routes/PrivatRoute";


const Home = lazy(() => import('pages/homePage/HomePage'));
const Login = lazy(() => import('pages/loginPage/LoginPage'));
const Contacts = lazy(() => import('pages/contactsPage/ContactsPage'));
const Register = lazy(() => import('pages/registerPage/RegisterPage'));
const NotFound = lazy(() => import('pages/notFoundPage/NotFoundPage'));

const App = () => {

    const {
        isRefreshing
    } = useAuth();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    if (isRefreshing) {
        return 
    }
        
    return isRefreshing
        ? <RotatingLines
                strokeColor="rgb(11, 127, 171)"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
        />
        :(
        <Routes>  
        <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route
            path="/login"
            element={
                <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
            />
            <Route
            path="/signup"
            element={
                <RestrictedRoute redirectTo="/contacts" component={<Register />} />
            }
            />
            <Route
            path="/contacts"
            element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
            />
            <Route path="*" element={<NotFound/>}/>
        </Route>
        </Routes>
    )
};

export default App;