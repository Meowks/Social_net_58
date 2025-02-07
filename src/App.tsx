import { ForgotPasswordPage } from "./pages/ForgotPasswordPage/ForgotPasswordPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SContainer } from "./themes/Container.style";
import { PostPage } from "./pages/PostPage/PostPage";

import Modal from 'react-modal';


function App() {

  const routerConfig = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/main-page",
      element: <MainPage />,
    },
    {
      path: "profile-page",
      element: <ProfilePage />,
    },
    {
      path: "ForgotPasswordPage",
      element: <ForgotPasswordPage/>,
    },
    {
      path: "RegistrationPage",
      element: <RegistrationPage />,
    },
    {
      path: "/posts/:postId",
      element: <PostPage/>,
    },
  ])
  Modal.setAppElement('#root');
  return (
    <SContainer>
      
      <RouterProvider router={routerConfig} />
    </SContainer>
  );
}

export default App;
