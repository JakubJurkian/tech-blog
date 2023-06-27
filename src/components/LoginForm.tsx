import React, { ReactNode, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import useFormValidation from '../hooks/use-form-validation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { authSuccess } from '../store/authSlice';
import Spinner from './Spinner';
import { updateEmail } from '../store/profileSlice';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState<ReactNode | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const validateValue = (value: string) => {
    return value.trim() !== '' && value.length < 50;
  };

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useFormValidation(validateValue);

  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: passwordReset,
  } = useFormValidation(validateValue);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (emailIsValid && passwordIsValid) {
      setIsLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          setIsLoading(false);

          dispatch(authSuccess({email, password}));
          // dispatch(updateName(name));
          dispatch(updateEmail(email));

          emailReset();
          passwordReset();
          navigate('/');
        })
        .catch(() => {
          setIsLoading(false);
          setErrorMessage(<div className='text-center'><p className='text-red-500 text-lg'>Your email or password is incorrect.</p></div>)
        });
    }
  };

  return (
    <div className="flex flex-col items-center relative bottom-14 xxs:bottom-20 xs:bottom-28 s:bottom-36 sm:bottom-48 md:bottom-52 mx-auto px-3 md:h-screen lg:py-0">
      <div className="w-full rounded-lg shadow-md border md:mt-0 sm:max-w-lg xl:p-0 bg-gray-900 border-gray-700">
        <div className="p-6 space-y-4 sm:p-8">
          <h1 className="text-2xl text-center font-bold tracking-tight md:text-2xl text-gray-300">
            Login
          </h1>
          <form className="space-y-4" action="#" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="form-label">
                Your email
              </label>
              <input
                id="email"
                value={email}
                type="email"
                name="email"
                placeholder="name@email.com"
                className={`form-input ${emailHasError ? 'form-input-error' : null}`}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                required
              />
              {emailHasError && <p className='error-message'>Please enter a valid email.</p>}
            </div>
            <div>
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                id="password"
                value={password}
                type="password"
                name="password"
                placeholder="••••••••"
                className={`form-input ${passwordHasError ? 'form-input-error' : null}`}
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
                required
              />
              {passwordHasError && <p className='error-message'>Please enter a valid password.</p>}
            </div>
            {isLoading && <Spinner />}
            {errorMessage}
            <button
              type="submit"
              className="w-full text-white bg-[#2057cd] hover:bg-[#1d4ed8] focus:ring-2 focus:outline-none focus:ring-[#1e40af] font-medium rounded-lg text-base px-5 py-2.5 text-center"
            >
              Login
            </button>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="font-medium hover:underline text-[#3b82f6]"
              >
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
