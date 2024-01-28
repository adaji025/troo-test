import { useState } from "react";
import { Divider, Select, TextInput, LoadingOverlay } from "@mantine/core";
import { notifications } from '@mantine/notifications';
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { Input } from "../../components/ui/input";
import SelectInput from "../../components/ui/SelectInput";
import { HiOutlineBars3 } from "react-icons/hi2";
import { SlOptionsVertical } from "react-icons/sl";
import { useForm } from "@mantine/form";
import { randomId } from "@mantine/hooks";
import { BiTrash } from "react-icons/bi";
import { Upload } from "./components/Upload";

const CreateBills = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const form = useForm({
    initialValues: {
      datapoints: [
        {
          desc: "",
          qty: "",
          price: "",
          amount: "",
          tax: "",
          key: randomId(),
        },
      ],
      approval: [
        {
          title: "",
          assignTo: "",
          when: "",
          amount: "",
          key: randomId(),
        },
      ],
    },
  });

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

  const handleSave = () => { 
    setLoading(true)
    setTimeout(() => {
      notifications.show({
        title: 'Success',
        message: 'Bills created successfully! 🤥',
      })
      setLoading(false)
    }, 3000)
  }

  const ProductDetails = form.values.datapoints.map((item, index) => (
    <div className="relative">
      <div
        className="mt-6 grid grid-cols-3 sm:grid-cols-5 gap-5 relative  w-[98%]"
        key={item.key}
      >
        <div>
          <h2 className="text-sm mb-5">Description</h2>
          <div className="flex items-center gap-2">
            <HiOutlineBars3 />
            <Select
              radius="md"
              size="md"
              className=" w-full border-0 border-secondary rounded"
              data={[
                { label: "Generator", value: "Generator" },
                { label: "Generator2", value: "Generator2" },
                { label: "Generator3", value: "Generator3" },
              ]}
              clearable
            />
          </div>
        </div>

        <div>
          <h2 className="text-sm mb-5">Quantity</h2>
          <Select
            radius="md"
            size="md"
            className="w-full border-0 border-secondary rounded"
            data={[
              { label: "1", value: "1" },
              { label: "2", value: "2" },
              { label: "3", value: "3" },
              { label: "4", value: "4" },
              { label: "5", value: "5" },
              { label: "6", value: "6" },
              { label: "7", value: "7" },
            ]}
            clearable
          />
        </div>

        <div>
          <h2 className="text-sm mb-5">Unit price</h2>
          <TextInput size="md" />
        </div>
        <div>
          <h2 className="text-sm mb-5">Tax</h2>
          <TextInput size="md" />
        </div>
        <div>
          <h2 className="text-sm mb-5">Amount</h2>
          <TextInput size="md" />
        </div>
        <SlOptionsVertical className="absolute -right-6 top-[30%] sm:top-[60%]" />

        {index !== 0 && (
          <BiTrash
            size={24}
            color="red"
            className="absolute right-0"
            onClick={() => form.removeListItem("datapoints", index)}
          />
        )}
      </div>
    </div>
  ));

  const ApprovalData = form.values.approval.map((item, index) => (
    <div className="relative mt-10" key={item.key}>
      <div className="mt-5 flex flex-col sm:flex-row gap-5 lg:gap-10">
        <Input className="w-full" placeholder="Amount" />
        <Input className="w-full" placeholder="Payment terms" />
      </div>
      <div className="mt-5 flex flex-col sm:flex-row gap-5 lg:gap-10">
        <Input className="w-full" placeholder="Amount" />
        <Input className="w-full" placeholder="Payment terms" />
      </div>
      <Divider mt={24} />
      {index !== 0 && (
        <BiTrash
          size={24}
          color="red"
          className="absolute right-0 -top-7"
          onClick={() => form.removeListItem("approval", index)}
        />
      )}
    </div>
  ));
  return (
    <div>
      <LoadingOverlay visible={loading} />
      <div className="flex justify-between">
        <FaArrowLeft size={24} onClick={() => navigate(-1)} />
        <button className="flex items-center gap-2 text-white bg-primary px-6 justify-center max-w-[164px] rounded-full py-2 text-sm font-medium"
        onClick={handleSave}>
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

      <div className="mt-5">
        <h2 className="font-medium">Product details</h2>

        {ProductDetails}
        <div
          className="text-primary mt-5 mx-auto text-base inline-flex items-center gap-2 cursor-pointer font-medium"
          onClick={() => {
            form.insertListItem("datapoints", {
              desc: "",
              qty: "",
              price: "",
              amount: "",
              tax: "",
              key: randomId(),
            });
          }}
        >
          <FaPlus size={10} />
          Add item
        </div>
      </div>

      <div className="mt-5">
        <h2 className="font-medium">Approval</h2>

        {ApprovalData}
        <div
          className="text-primary mt-5 mx-auto text-base inline-flex items-center gap-2 cursor-pointer font-medium"
          onClick={() => {
            form.insertListItem("approval", {
              desc: "",
              qty: "",
              price: "",
              amount: "",
              tax: "",
              key: randomId(),
            });
          }}
        >
          <FaPlus size={10} />
          Add new approver
        </div>
      </div>
      <div className="mt-10 w-full md:w-1/2">
        <Upload />
      </div>
    </div>
  );
};

export default CreateBills;
