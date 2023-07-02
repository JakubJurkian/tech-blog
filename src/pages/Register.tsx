import { useSelector } from 'react-redux';
import RegisterForm from '../components/RegisterForm';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store/store';
import { useEffect } from 'react';

export default function RegisterPage() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  return <RegisterForm />;
}
