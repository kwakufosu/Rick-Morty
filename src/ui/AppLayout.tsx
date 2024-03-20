import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className=" grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="mt-20 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
