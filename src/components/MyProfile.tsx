import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const MyProfilePage: React.FC = () => {
  const { name, email } = useSelector((state: RootState) => state.profile);
    console.log(name, email);
  return (
    <div className='flex flex-col'>
      <h2 className='text-2xl self-center'>My Profile</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      {/* Add form fields and update handlers for name and email */}
    </div>
  );
};

export default MyProfilePage;