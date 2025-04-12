import React, { useState } from 'react';
import AuthLayout from '../../components/layouts/AuthLayout';
import { useNavigate, Link } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';
import Input from "../../components/Inputs/Input";

const Login = () => {
  const [email, setEmail] = useState("");  // <- fixed: useState was lowercase
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!fulName) {
      setError("Please enter your name");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password) {
      setError("Please enter the password.");
      return;
    }

    setError("");
    // TODO: Handle actual login logic here (API call)
    console.log("Logging in with:", email, password);
    navigate('/dashboard'); // Example redirect
  };

  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Please enter your details to log in.
        </p>
        {error && <p className="text-red-500 mb-2">{error}</p>}

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <Input
            type="text"
            label="Email Address"
            value={email}
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
            className="input-box"
          />
          <Input
            type="text"
            value={password}
            label="Password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="input-box"
          />
          <button type="submit" className="btn-primary">
            Log In
          </button>

          <p className="text-[13px] text-slate-800 mt-3   ">
             Don't have an account?{" "}
            <Link className="text-violet-600 hover:underline font-medium text-primary " to="/signup">
              Sign Up
            </Link>
            </p>

        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
