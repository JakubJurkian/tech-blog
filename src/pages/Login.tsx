import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export default function LoginPage() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);
  
  return <LoginForm />;
}
