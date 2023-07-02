import React, { ReactNode, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useFormValidation from '../hooks/use-form-validation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { useDispatch } from 'react-redux';
import { authSuccess } from '../store/authSlice';
import Spinner from './Spinner';
import { updateEmail, updateName } from '../store/profileSlice';
import { doc, setDoc } from 'firebase/firestore';

const errorText = (value: string) => {
  if (value === 'confirmPassword') {
    return <p className="error-message">your passwords do not fit.</p>;
  } else {
    return <p className="error-message">Please enter a valid {value}.</p>;
  }
};

export default function RegisterForm() {
  const [errorMessage, setErrorMessage] = useState<ReactNode | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validateName = (value: string) => {
    return value.trim() !== '';
  };
  const validateEmail = (value: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(value);
  };
  const validatePassword = (value: string) => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordRegex.test(value);
  };
  const validateConfirmPassword = (value: string) => {
    return value === password;
  };

  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useFormValidation(validateName);

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useFormValidation(validateEmail);

  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: passwordReset,
  } = useFormValidation(validatePassword);

  const {
    value: confirmPassword,
    isValid: confirmPasswordIsValid,
    hasError: confirmPasswordHasError,
    valueChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
    reset: confirmPasswordReset,
  } = useFormValidation(validateConfirmPassword);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (
      nameIsValid &&
      emailIsValid &&
      passwordIsValid &&
      confirmPasswordIsValid &&
      password === confirmPassword
    ) {
      setIsLoading(true);
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, "users", res.user.uid), {
          name,
          email,
          password
        });
        
        setIsLoading(false);
        dispatch(authSuccess({ name, email, password }));
        dispatch(updateName(name));
        dispatch(updateEmail(email));

        nameReset();
        emailReset();
        passwordReset();
        confirmPasswordReset();
        navigate('/');
      } catch (error) {
        setIsLoading(false);
        setErrorMessage(
          <div className="text-center">
            <p className="text-red-500 text-lg">This email already exists.</p>
          </div>
        );
      }
    }
  };

  return (
    <>
      <div className="flex flex-col items-center relative bottom-16 xxs:bottom-20 xs:bottom-28 s:bottom-36 sm:bottom-48 md:bottom-60 mx-auto px-3 md:h-screen lg:py-0">
        <div className="w-full rounded-lg shadow-md border md:mt-0 sm:max-w-lg xl:p-0 bg-gray-900 border-gray-700">
          <div className="p-6 space-y-4 sm:p-8">
            <h1 className="text-2xl text-center font-bold tracking-tight md:text-2xl text-gray-300">
              Create an Account
            </h1>
            <form className="space-y-4" action="#" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  id="name"
                  value={name}
                  onChange={nameChangeHandler}
                  onBlur={nameBlurHandler}
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className={`form-input ${
                    nameHasError ? 'form-input-error' : null
                  }`}
                  required
                />
                {nameHasError && errorText('name')}
              </div>
              <div>
                <label htmlFor="email" className="form-label">
                  Your email
                </label>
                <input
                  id="email"
                  value={email}
                  onChange={emailChangeHandler}
                  onBlur={emailBlurHandler}
                  type="email"
                  name="email"
                  placeholder="name@email.com"
                  className={`form-input ${
                    emailHasError ? 'form-input-error' : null
                  }`}
                  required
                />
                {emailHasError && errorText('email')}
              </div>
              <div>
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  id="password"
                  value={password}
                  onChange={passwordChangeHandler}
                  onBlur={passwordBlurHandler}
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className={`form-input ${
                    passwordHasError ? 'form-input-error' : null
                  }`}
                  required
                />
                {passwordHasError && errorText('password')}
                <ul className="bg-slate-700 rounded-lg p-2 mr-6 mt-2 w-3/4 text text-xs">
                  <span>Password should contain at least: </span>
                  <li>- 6 characters</li>
                  <li>- one uppercase</li>
                  <li>- one lowercase letter</li>
                  <li>- one digit</li>
                  <li>- one special character</li>
                </ul>
              </div>
              <div>
                <label htmlFor="confirm-password" className="form-label">
                  Confirm password
                </label>
                <input
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={confirmPasswordChangeHandler}
                  onBlur={confirmPasswordBlurHandler}
                  type="password"
                  name="confirm-password"
                  placeholder="••••••••"
                  className={`form-input ${
                    confirmPasswordHasError ? 'form-input-error' : null
                  }`}
                  required
                />
                {confirmPasswordHasError && errorText('confirmPassword')}
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-300">
                    I accept the{' '}
                    <a
                      className="font-medium hover:underline text-[#3b82f6]"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              {isLoading && <Spinner />}
              {errorMessage}
              <button
                type="submit"
                className="w-full text-white bg-[#2057cd] hover:bg-[#1d4ed8] focus:ring-2 focus:outline-none focus:ring-[#1e40af] font-medium rounded-lg text-base px-5 py-2.5 text-center"
              >
                Create an account
              </button>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="font-medium hover:underline text-[#3b82f6]"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
