import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import LandingPage from "./pages/landing-page";
import UserRegisterOrLogin from "./pages/register-login-page";
import RootLayout from "./pages/root-layout";
import ListView from "./pages/list-interface";
import UserProfile from "./pages/user-profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="/register" element={<UserRegisterOrLogin />} />
      <Route path="/list" element={<ListView />} />
      <Route path="/profile" element={<UserProfile />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
