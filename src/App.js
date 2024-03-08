import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./App.css";

import Root from "./components/Header/Root";
import Hero from "./components/Hero";
import About from "./components/About";
import Clients from "./components/Clients";
import Contact from "./components/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<Hero />} />
      <Route path='home' element={<Hero />} />
      <Route path='about' element={<About />} />
      <Route path='clients' element={<Clients />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
