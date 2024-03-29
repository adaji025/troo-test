import { FaPlus } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import AnalyticsCard from "./components/AnalyticsCard";

import { MdFilterList } from "react-icons/md";
import BillsSummaryTable from "./components/BillsSummaryTable";
import { useNavigate } from "react-router-dom";
import { analytics } from "../../constant";


const Bills = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between">
        <div className="text-black font-medium text-xl md:text-[28px]">
          Bills
        </div>
        <button
          className="flex items-center gap-2 text-white bg-primary px-6 justify-center max-w-[164px] rounded-full py-2 text-sm font-medium"
          onClick={() => navigate("/create-bills")}
        >
          <FaPlus />
          <div>Create bill</div>
          <FaChevronDown size={10} />
        </button>
      </div>
      <div className="mt-10 grid gap-5 xl:gap-10 sm:grid-cols-2 md:grid-cols-3">
        {analytics.map((item, index) => (
          <AnalyticsCard key={index} item={item} />
        ))}
      </div>
      <div className="mt-10 flex justify-between">
        <h3 className="text-secondary font-medium">Bills summary</h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 font-medium border rounded-md py-1.5 px-3">
            <MdFilterList />
            <div className="text-xs">Filter</div>
          </div>
          <div className="flex items-center gap-1 font-medium border rounded-md py-1.5 px-3">
            <div className="text-xs">Export</div>
            <FaChevronDown size={10} className="mt-1" />
          </div>
        </div>
      </div>
      <BillsSummaryTable />
    </div>
  );
};

export default Bills;
