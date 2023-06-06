import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import EditPostPage from "./pages/Post";
import NewPostPage from "./pages/NewPost";
import AuthPage from "./pages/Auth";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "auth", element: <AuthPage /> },
      { path: "posts/:productId", element: <EditPostPage /> },
      { path: "create-new-post", element: <NewPostPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;