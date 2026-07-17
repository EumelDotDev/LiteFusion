import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import ServiceAreas from './pages/ServiceAreas';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "about", element: <About /> },
      { path: "service-areas", element: <ServiceAreas /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
