import { Fragment,  useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Overview from "../../pages/Overview/Overview";
import MobileSidebar from "./MobileSidebar";

const LoggedInContainer = () => {
  const [mobileNav, openMobileNav] = useState(false);
  

  return (
    <Fragment>
      <MobileSidebar mobileNav={mobileNav} openMobileNav={openMobileNav} />
      <div className="flex overflow-x-hidden">
        <div className="fixed h-screen hidden lg:flex lg:w-[250px]  bg-darkBlue">
          <Sidebar />
        </div>
        <div className="w-full">
          <Header mobileNav={mobileNav} openMobileNav={openMobileNav} />
          <main className="w-full bg-white pt-5 lg:pt-[50px] lg:ml-[250px] lg:w-[calc(100vw-250px)] px-4 lg:px-10 mb-10 mt-[80px] lg:mt-[unset]">
            <Routes>
              <Route path="/overview" element={<Overview />} />
            </Routes>
          </main>
        </div>
      </div>
    </Fragment>
  );
};

export default LoggedInContainer;
