import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import {isAuth} from "./utils/auth";
import {Register} from "./pages/Register";
import {Login} from "./pages/Login";
import {Main} from "./pages/Main";

function App() {
  const AuthRoute = ({ children }) => {
    if (isAuth()) {
      return children
    }
    return <Navigate to='/login' />
  }

  const UnAuthRoute = ({ children }) => {
    if (isAuth()) {
      return <Navigate to='/' />
    }
    return children
  }


  return (
    <div className="App">
      <Routes>
        <Route
            path='register'
            element={
              <UnAuthRoute>
                <Register />
              </UnAuthRoute>
            }
        />
        <Route
            path='login'
            element={
              <UnAuthRoute>
                <Login />
              </UnAuthRoute>
            }
        />
        <Route
            path='/'
            element={
              <AuthRoute>
                <Main />
              </AuthRoute>
            }
        />
      </Routes>
    </div>
  );
}

export default App;
