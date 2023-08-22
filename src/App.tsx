import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import LandingPage from "./pages/landing-page";
import RootLayout from "./pages/root-layout";
import ListView from "./pages/list-interface";
import EventDetail from "./pages/event-detail";
import MapView from "./pages/map-interface";
import UserProfile from "./pages/user-profile";
import NotFound from "./pages/not-found";
import Bookmark from "./pages/bookmark";
import CreateEvent from "./pages/event/create/CreateEvent";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="/map" element={<MapView />} />
      <Route path="/map/:category" element={<MapView />} />
      <Route path="/map/:category/:keyword" element={<MapView />} />
      <Route path="/list" element={<ListView />} />
      <Route path="/list/:category" element={<ListView />} />
      <Route path="/list/:category/:sort/" element={<ListView />} />
      <Route path="/list/:category/:sort/:keyword" element={<ListView />} />
      <Route path="/event/:event_id" element={<EventDetail />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/bookmark" element={<Bookmark />} />
      <Route path="*" element={<NotFound />} />
     <Route path="/event/create-event" element={<CreateEvent />} />
    </Route>
  )

);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
