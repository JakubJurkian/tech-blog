import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function RegisterForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);

  return (
    <>
    <div className="flex flex-col items-center relative bottom-14 xs:bottom-24 s:bottom-36 sm:bottom-40 md:bottom-44 mx-auto px-3 md:h-screen lg:py-0">
      <div className="w-full rounded-lg shadow-md border md:mt-0 sm:max-w-lg xl:p-0 bg-gray-900 border-gray-700">
          <div className="p-6 space-y-4 sm:p-8">
              <h1 className="text-2xl text-center font-bold tracking-tight md:text-2xl text-gray-300">
                Create an Account
              </h1>
              <form className="space-y-4" action="#">
                <div>
                  <label htmlFor="name" className="form-label">Name</label>
                  <input id="name" type="text" name="name" placeholder="Your Name" className="form-input" required ref={nameRef}/>
                </div>
                <div>
                  <label htmlFor="email" className="form-label">Your email</label>
                  <input id="email" type="email" name="email" placeholder="name@email.com" className="form-input" required ref={emailRef}/>
                </div>
                <div>
                  <label htmlFor="password" className="form-label">Password</label>
                  <input id="password" type="password" name="password" placeholder="••••••••" className="form-input" required ref={passwordRef}/>
                </div>
                <div>
                  <label htmlFor="confirm-password" className="form-label">Confirm password</label>
                  <input id="confirm-password" type="password" name="confirm-password"  placeholder="••••••••" className="form-input" required ref={passwordConfirmRef} />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-light text-gray-300">I accept the <a className="font-medium hover:underline text-[#3b82f6]" href="#">Terms and Conditions</a></label>
                  </div>
                </div>
                <button type="submit" className="w-full text-white bg-[#2057cd] hover:bg-[#1d4ed8] focus:ring-2 focus:outline-none focus:ring-[#1e40af] font-medium rounded-lg text-base px-5 py-2.5 text-center">Create an account</button>
                 <p className="text-sm text-gray-500 dark:text-gray-300">
                    Already have an account? <Link to='/login' className="font-medium hover:underline text-[#3b82f6]">Login here</Link>
                 </p>
              </form>
          </div>
        </div>
      </div>
    </>
  );
}
