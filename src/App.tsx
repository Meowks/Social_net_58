import { ForgotPasswordPage } from "./pages/ForgotPasswordPage/ForgotPasswordPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";



function App() {
  return (
      <div className="App">
        <div className="container">
          <LoginPage />
          {/* <RegistrationPage/> */}
          {/* <ForgotPasswordPage/> */}
        </div>
      </div>
  );
}

export default App;
