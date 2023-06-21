import { useSelector } from "react-redux";
import NewPost from "../components/NewPost";
import { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";

function NewPostPage() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  const handleSave = (content: string) => {
    console.log(content);
  }

  return (
    <>
      {!isLoggedIn && navigate('/')}
      <NewPost onSave={handleSave} />
    </>
  );
}

export default NewPostPage;
