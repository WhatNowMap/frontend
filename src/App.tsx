import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

import LandingPage from './pages/landing-page';
import RootLayout from './pages/root-layout';
import ListView from './pages/list-interface';
import EventDetail from './pages/event-detail';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<RootLayout />}>
      <Route
        index
        element={<LandingPage />}
      />
      <Route
        path='/list'
        element={<ListView />}
      />
      <Route
        path='/event'
        element={<EventDetail />}
      />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
