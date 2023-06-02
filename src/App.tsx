import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import PostPage from "./pages/Post";
import AuthPage from "./pages/Auth";
import RootLayout from "./pages/Root";

import './App.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "auth", element: <AuthPage /> },
      { path: "posts/:productId", element: <PostPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;