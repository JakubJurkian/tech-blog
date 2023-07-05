import { useSelector } from "react-redux";
import NewPost from "../components/NewPost";
import { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function NewPostPage() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const email = useSelector((state: RootState) => state.profile.email);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isLoggedIn || email !== 'test@test.com') {
      navigate('/');
    }
  }, [isLoggedIn, email, navigate]);

  return (
    <>
      <NewPost />
    </>
  );
}

export default NewPostPage;
