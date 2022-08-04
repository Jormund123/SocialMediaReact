import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
    const { user } = useContext(AuthContext);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={user ? <Home /> : <Login />} />
                <Route path='/login' element={user ? <Navigate replace to='/' /> : <Login />} />
                <Route path='/register' element={user ? <Navigate replace to='/' /> : <Register />} />
                <Route path='/profile/:username' element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
