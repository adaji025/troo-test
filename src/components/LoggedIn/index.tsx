import { Fragment, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Overview from "../../pages/Overview/Overview";
import MobileSidebar from "./MobileSidebar";
import Inbox from "../../pages/Inbox/Inbox";
import Bills from "../../pages/Payables/Bills";
import Approvals from "../../pages/Payables/Approval";
import PaymentsOuts from "../../pages/Payables/PaymentsOut";
import Procurements from "../../pages/Payables/Procurement";
import Reports from "../../pages/Reports/Reports";
import Configurations from "../../pages/Configurations/Configuration";
import Expenses from "../../pages/Expenses/Expenses";
import Receiveables from "../../pages/Receiveables/Receiveable";
import CreateBills from "../../pages/Payables/CreateBills";

const LoggedInContainer = () => {
  const [mobileNav, openMobileNav] = useState(false);

  return (
    <Fragment>
      <MobileSidebar mobileNav={mobileNav} openMobileNav={openMobileNav} />
      <div className="flex w-full items-start">
        <div className="sticky top-0 hidden lg:flex">
          <Sidebar />
        </div>
        <div className="w-full">
          <Header mobileNav={mobileNav} openMobileNav={openMobileNav} />
          <main className="w-full bg-white pt-5 lg:pt-[32px] px-4 lg:px-10 mb-10 mt-[80px] lg:mt-[unset]">
            <Routes>
              <Route path="/overview" element={<Overview />} />
              <Route path="/inbox" element={<Inbox />} />
              <Route path="/bills" element={<Bills />} />
              <Route path="/approvals" element={<Approvals />} />
              <Route path="/payment-out" element={<PaymentsOuts />} />
              <Route path="/procurements" element={<Procurements />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/configuration" element={<Configurations />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/receiveables" element={<Receiveables />} />
              <Route path="/create-bills" element={<CreateBills />} />
            </Routes>
          </main>
        </div>
      </div>
    </Fragment>
  );
};

export default LoggedInContainer;
