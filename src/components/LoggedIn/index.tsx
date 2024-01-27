import { Fragment,  useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const LoggedInContainer = () => {
  const [mobileNav, openMobileNav] = useState(false);
  

  return (
    <Fragment>
      <div className="flex overflow-x-hidden">
        <div className="fixed h-screen hidden lg:flex lg:w-[300px]  bg-darkBlue p-[22px]">
          <Sidebar />
        </div>
        <div className="w-full">
          <Header mobileNav={mobileNav} openMobileNav={openMobileNav} />
          <main className="w-full bg-white pt-5 lg:pt-[50px] lg:ml-[300px] lg:w-[calc(100vw-300px)] px-4 lg:px-10 mb-10 mt-[80px] lg:mt-[unset]">
            <Routes></Routes>
          </main>
        </div>
      </div>
    </Fragment>
  );
};

export default LoggedInContainer;
