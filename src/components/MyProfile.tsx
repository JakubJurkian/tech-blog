import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { db, storage } from '../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { updateAvatar } from '../store/profileSlice';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import guestUser from '/guest-user.png';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const MyProfilePage: React.FC = () => {
  const [transition] = useAutoAnimate();
  const [file, setFile] = useState<File | null>(null);
  const [percentage, setPercentage] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const uid = useSelector((state: RootState) => state.auth.user?.uid);
  const avatarUrl = useSelector((state: RootState) => state.profile.avatarUrl);

  useEffect(() => {
    async function getAvatar() {
      setIsLoading(true);
      const docRef = doc(db, 'users', uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        dispatch(updateAvatar(docSnap.data().avatar));
        setIsLoading(false);
      } else {
        console.log('No such document!');
        setIsLoading(false);
      }
    }
    getAvatar();
  }, [uid, dispatch]);

  const { name, email } = useSelector((state: RootState) => state.profile);
  console.log(name, email);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const uploadFile = () => {
      if (file) {
        const name = new Date().getTime() + file.name;
        const storageRef = ref(storage, name);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          'state_changed',
          (snapshot) => {
            setIsLoading(true);
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setPercentage(progress);
          },
          (error) => {
            setIsLoading(false);
            console.log(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              const ref = doc(db, 'users', uid);
              setDoc(ref, { avatar: downloadURL }, { merge: true });
              dispatch(updateAvatar(downloadURL));
              setIsLoading(false);
            });
          }
        );
      }
    };

    file && uploadFile();

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setFile(null);
  };

  let content;
  if (!isLoading) {
    content = (
      <img
        src={avatarUrl ? avatarUrl : guestUser}
        alt="user image"
        className="rounded-3xl"
      />
    );
  }
  if (isLoading) {
    content = (
      <div role="status" className="animate-pulse">
        <div className="flex items-center justify-center h-56 lg:h-[476px] my-2 bg-gray-300 rounded-3xl dark:bg-gray-700">
          <svg
            className="w-12 text-gray-200 dark:text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 640 512"
          >
            <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col place-items-center">
      <h2 className="text-2xl self-center">My Profile</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col place-items-center"
      >
        <input
          type="file"
          id="file"
          onChange={(e) => {
            const selectedFile = e.target.files?.[0];
            if (selectedFile) {
              setFile(selectedFile);
            }
          }}
          ref={fileInputRef}
        />
        <button
          className="bg-blue-400 my-3 w-1/2 p-1 rounded-md disabled:bg-gray-500 disabled:cursor-not-allowed"
          disabled={percentage !== null && percentage < 100}
        >
          Upload
        </button>
      </form>
      <div className="w-52" ref={transition}>{content}</div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default MyProfilePage;
