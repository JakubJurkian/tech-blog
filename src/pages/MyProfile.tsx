import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RootState } from "../store/store";
import MyProfilePage from "../components/MyProfile";

function AboutMePage() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isLoggedIn) navigate('/');
  }, [isLoggedIn, navigate]);
  
  return (
    <>
      <div className="bg-gray-900 p-3 mx-2 rounded-xl shadow-md max-w-lg relative bottom-16 xxs:bottom-20 xs:flex-row xs:p-4 xs:bottom-28 s:m-auto s:bottom-36 sm:bottom-44 sm:px-6 md:bottom-52 md:w-4/5 xl:max-w-xl">
        <MyProfilePage />
      </div>
    </>
  );
}

export default AboutMePage;
