import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { Input } from "../../components/ui/input";
import SelectInput from "../../components/ui/SelectInput";

const CreateBills = () => {
  const navigate = useNavigate();
  const options = [
    {
      label: "Robert Michael",
      value: "Robert Michael",
    },
    {
      label: "John Smith",
      value: "John Smith",
    },
    {
      label: "John Doe",
      value: "John Doe",
    },
  ];
  return (
    <div>
      <div className="flex justify-between">
        <FaArrowLeft size={24} onClick={() => navigate(-1)} />
        <button className="flex items-center gap-2 text-white bg-primary px-6 justify-center max-w-[164px] rounded-full py-2 text-sm font-medium">
          Save
        </button>
      </div>
      <div className="mt-10 flex justify-between">
        <h3 className="font-medium text-secondary">Enter a bill</h3>
        <div className="flex items-center gap-2">
          <FaPlus size={10} />
          <div className="text-sm font-medium">Add existing Vendor</div>
        </div>
      </div>
      <div className="mt-5 flex flex-col sm:flex-row gap-5 lg:gap-10">
        <SelectInput data={options} placeholder="Vendor" />
        <Input className="w-full" placeholder="Invoice no" />
      </div>
      <div className="mt-5 flex flex-col sm:flex-row gap-5 lg:gap-10">
        <Input className="w-full" placeholder="Amount" />
        <Input className="w-full" placeholder="Payment terms" />
      </div>
      <div className="mt-5 flex flex-col sm:flex-row gap-5 lg:gap-10">
        <Input className="w-full" placeholder="Billing Address" />
        <Input className="w-full" placeholder="Bill description (Optional)" />
      </div>
      <div className="mt-5 flex flex-col sm:flex-row gap-5 lg:gap-10">
        <Input className="w-full" placeholder="Date issued  " />
        <Input className="w-full" placeholder="Due date" />
      </div>
    </div>
  );
};

export default CreateBills;
