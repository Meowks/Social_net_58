import { ForgotPasswordPage } from "./pages/ForgotPasswordPage/ForgotPasswordPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SContainer } from "./themes/Container.style";



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
  ])

  return (
    <SContainer>
      <RouterProvider router={routerConfig} />
    </SContainer>
  );
}

export default App;
