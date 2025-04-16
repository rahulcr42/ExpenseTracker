<<<<<<< HEAD
import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Input = ({ label, value, onChange, placeholder, type }) => {
=======
import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const Input = ({ value, onChange, placeholder, label, type }) => {
>>>>>>> 96bf417c43b445d7e9846fa4077355731c8ac36e
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label className="text-[13px] text-slate-800">{label}</label>
<<<<<<< HEAD

      <div className="input-box">
        <input
          type={type == 'password' ? showPassword ? 'text' : 'password' : type}
=======
      <div className="input-box flex items-center border border-slate-300 px-2 py-2 rounded">
        <input
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
>>>>>>> 96bf417c43b445d7e9846fa4077355731c8ac36e
          placeholder={placeholder}
          className="w-full bg-transparent outline-none"
          value={value}
          onChange={(e) => onChange(e)}
        />
<<<<<<< HEAD

        {type === "password" && (
          <>
            {showPassword ? (
              <FaRegEye
                size={22}
                className="text-primary cursor-pointer"
                onClick={() => toggleShowPassword()}
              />
            ) : (
              <FaRegEyeSlash
                size={22}
                className="text-slate-400 cursor-pointer"
                onClick={() => toggleShowPassword()}
              />
            )}
          </>
=======
        {type === 'password' && (
          showPassword ? (
            <FaRegEyeSlash
              size={22}
              className="text-slate-400 cursor-pointer"
              onClick={toggleShowPassword}
            />
          ) : (
            <FaRegEye
              size={22}
              className="text-primary cursor-pointer"
              onClick={toggleShowPassword}
            />
          )
>>>>>>> 96bf417c43b445d7e9846fa4077355731c8ac36e
        )}
      </div>
    </div>
  );
};

export default Input;
