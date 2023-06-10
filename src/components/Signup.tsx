import { useRef } from 'react';

export default function Signup() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const paswordConfirmRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <div className="inline-block w-full s:w-[420px] rounded-lg p-4 shadow-lg bg-[#111827] relative bottom-10">
        <h2 className="text-center mb-4 text-2xl">Sign Up</h2>
        <form>
          <div className=''>
            <label htmlFor="email" className='block'>Email</label>
            <input className='form-input' id="email" type="email" ref={emailRef} required />
          </div>
          <div>
            <label htmlFor="password" className='block'>Password</label>
            <input className='form-input' id="password" type="password" ref={passwordRef} required />
          </div>
          <div>
            <label htmlFor="confirm-password" className='block'>Confirm Password</label>
            <input
            className='form-input'
              id="confirm-password"
              type="password"
              ref={paswordConfirmRef}
              required
            />
          </div>

          <button className="w-full p-2 mt-3 rounded-md bg-slate-600" type="submit">
            Sign Up
          </button>
          <div className="mt-6 text-center border-t-2 pt-2">
            Already have an account? Log-in
          </div>
        </form>
      </div>
    </>
  );
}
