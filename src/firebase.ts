import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp({
  apiKey: 'AIzaSyCZhBQ16bJKCDjVr6s3dPydhpFS55jwIEM',
  authDomain: 'tech-blog-posts.firebaseapp.com',
  databaseURL: 'https://tech-blog-posts-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'tech-blog-posts',
  storageBucket: 'tech-blog-posts.appspot.com',
  messagingSenderId: '902151420850',
  appId: '1:902151420850:web:0f5643f81c9c2707c0c2ab',
});

//I'm doing this in this file because we can use these var. during development

export const auth = getAuth(app);
export default app;
