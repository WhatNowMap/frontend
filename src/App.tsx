import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import LandingPage from "./pages/landing-page";
import UserRegisterOrLogin from "./pages/register-login-page";
import RootLayout from "./pages/root-layout";
import ListView from "./pages/list-interface";
import CreateEvent from "./pages/event/create/CreateEvent";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="/register" element={<UserRegisterOrLogin />} />
            <Route path="/list" element={<ListView />} />
            <Route path="/createEvent" element={<CreateEvent />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
