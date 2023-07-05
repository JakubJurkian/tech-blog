import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { storage } from '../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { updateAvatar } from '../store/profileSlice';

const MyProfilePage: React.FC = () => {
  const [file, setFile] = useState();
  const dispatch = useDispatch();
  const avatarUrl = useSelector((state: RootState) => state.profile.avatarUrl);

  // useEffect(() => {
  //   const uploadFile = () => {
  //     const name = new Date().getTime() + file.name;
  //     const storageRef = ref(storage, file.name);
  //     const uploadTask = uploadBytesResumable(storageRef, file);

  //     uploadTask.on(
  //       'state_changed',
  //       (snapshot) => {
  //         const progress =
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         console.log('Upload is ' + progress + '% done');
  //         switch (snapshot.state) {
  //           case 'paused':
  //             console.log('Upload is paused');
  //             break;
  //           case 'running':
  //             console.log('Upload is running');
  //             break;
  //           default:
  //             break;
  //         }
  //       },
  //       (error) => {
  //         console.log(error);
  //       },
  //       () => {
  //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //           console.log('File available at', downloadURL);
  //           dispatch(updateAvatar(downloadURL));
  //         });
  //       }
  //     );
  //   };
  //   file && uploadFile();
  // }, [file]);
  const { name, email } = useSelector((state: RootState) => state.profile);
  console.log(name, email);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col place-items-center">
      <h2 className="text-2xl self-center">My Profile</h2>
      <form onSubmit={handleSubmit} className="flex flex-col place-items-center">
        <input
          type="file"
          id="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button className="bg-blue-400 my-3 w-1/2 p-1 rounded-md">
          Upload
        </button>
      </form>

      {avatarUrl && (
        <div className="">
          <img src={avatarUrl} alt="alt" className="rounded-3xl" />
        </div>
      )}
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default MyProfilePage;
