import { Outlet } from "react-router";
import Navbar from "../sectioon/Navbar";
import Footer from "../sectioon/Footer";

const Rootlayouts = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Rootlayouts;
