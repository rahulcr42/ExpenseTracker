<<<<<<< HEAD
=======
import React from 'react'

>>>>>>> 96bf417c43b445d7e9846fa4077355731c8ac36e
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
<<<<<<< HEAD
} from "react-router-dom";
import React from "react";
import LoginForm from "./pages/Auth/LoginForm";
import SignUpForm from "./pages/Auth/SignUpForm";
import UserProvider from "./context/UserContext";

import { Toaster } from "react-hot-toast";
=======
} from 'react-router-dom';
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
>>>>>>> 96bf417c43b445d7e9846fa4077355731c8ac36e
import Home from "./pages/Dashboard/Home";
import Income from "./pages/Dashboard/Income";
import Expense from "./pages/Dashboard/Expense";

<<<<<<< HEAD
const App = () => {
  return (
    <div>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/login" exact element={<LoginForm />} />
            <Route path="/signUp" exact element={<SignUpForm />} />
            <Route path="/dashboard" exact element={<Home />} />
            <Route path="/income" exact element={<Income />} />
            <Route path="/expense" exact element={<Expense />} />
          </Routes>
        </Router>

        <Toaster
          toastOptions={{
            className: "",
            style: {
              fontSize:'13px'
            },
          }}
        />
        
      </UserProvider>
    </div>
  );
};

// Define the Root component to handle the initial redirect
const Root = () => {
  // Check if token exists in localStorage
  const isAuthenticated = !!localStorage.getItem("token");

  // Redirect to dashboard if authenticated, otherwise to login
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};

export default App;
=======

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root/>} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/signUp" exact element={<SignUp/>} />
          <Route path="/dashboard" exact element={<Home/>} />
          <Route path="/income" exact element={<Income/>} />
          <Route path="/expense" exact element={<Expense/>} />
        </Routes>
      </Router>
    </div>  )
}

export default App;

const Root = () =>{
  const isAuthenticated =!!localStorage.getItem("token");

  return isAuthenticated ? (
  <Navigate to="/dashboard" /> 
  ):( 
  <Navigate to="/login" />);
}
>>>>>>> 96bf417c43b445d7e9846fa4077355731c8ac36e
