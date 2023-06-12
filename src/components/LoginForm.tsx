import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/slices/authSlice';
import { Link } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Perform login logic and fetch user data
    const user = { email, password };

    dispatch(login(user));

    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex flex-col items-center relative bottom-14 xs:bottom-24 s:bottom-36 sm:bottom-40 md:bottom-44 mx-auto px-3 md:h-screen lg:py-0">
      <div className="w-full rounded-lg shadow-md border md:mt-0 sm:max-w-lg xl:p-0 bg-gray-900 border-gray-700">
          <div className="p-6 space-y-4 sm:p-8">
              <h1 className="text-2xl text-center font-bold tracking-tight md:text-2xl text-gray-300">
                Login
              </h1>
              <form className="space-y-4" action="#" onSubmit={handleLogin}>
                <div>
                  <label htmlFor="email" className="form-label">Your email</label>
                  <input id="email" value={email} type="email" name="email" placeholder="name@email.com" className="form-input" required ref={emailRef}/>
                </div>
                <div>
                  <label htmlFor="password" className="form-label">Password</label>
                  <input id="password" value={password} type="password" name="password" placeholder="••••••••" className="form-input" required ref={passwordRef}/>
                </div>
                <button type="submit" className="w-full text-white bg-[#2057cd] hover:bg-[#1d4ed8] focus:ring-2 focus:outline-none focus:ring-[#1e40af] font-medium rounded-lg text-base px-5 py-2.5 text-center">Login</button>
                 <p className="text-sm text-gray-500 dark:text-gray-300">
                    Don't have an account? <Link to="/register" className="font-medium hover:underline text-[#3b82f6]">Register here</Link>
                 </p>
              </form>
          </div>
        </div>
      </div>
  );
};

export default LoginForm;