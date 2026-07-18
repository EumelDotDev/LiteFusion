import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import ServiceAreas from './pages/ServiceAreas';
import Contact from './pages/Contact';
import Insurance from './pages/Insurance';
import FAQ from './pages/FAQ';
import WindshieldRepair from './pages/services/WindshieldRepair';
import WindshieldReplacement from './pages/services/WindshieldReplacement';
import DoorGlassReplacement from './pages/services/DoorGlassReplacement';
import BackglassReplacement from './pages/services/BackglassReplacement';
import SideViewMirrorReplacement from './pages/services/SideViewMirrorReplacement';
import RegulatorMotorReplacement from './pages/services/RegulatorMotorReplacement';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "services/windshield-repair", element: <WindshieldRepair /> },
      { path: "services/windshield-replacement", element: <WindshieldReplacement /> },
      { path: "services/door-glass", element: <DoorGlassReplacement /> },
      { path: "services/backglass", element: <BackglassReplacement /> },
      { path: "services/side-view-mirror", element: <SideViewMirrorReplacement /> },
      { path: "services/regulator-motor", element: <RegulatorMotorReplacement /> },
      { path: "insurance", element: <Insurance /> },
      { path: "faq", element: <FAQ /> },
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
