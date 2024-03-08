import Footer from "../Footer";
import Header from "./Header";
import { Outlet } from "react-router";

function Root() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Root;
