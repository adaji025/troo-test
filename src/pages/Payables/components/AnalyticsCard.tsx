import { FaArrowRight } from "react-icons/fa6";
type IProps = {
  item: {
    title: string;
    icon: string;
    amount: string;
  };
};
const AnalyticsCard = ({ item }: IProps) => {
  return (
    <div className="border p-5 rounded-xl flex justify-between ">
      <div>
        <div className="flex items-center gap-2">
          <img src={item.icon} alt="" />
          <div>{item.title}</div>
        </div>
        <h2 className="font-medium text-[24px] lg:text-[28px] text-secondary">
          ₦{item.amount}
        </h2>
      </div>
      <FaArrowRight size={24} />
    </div>
  );
};

export default AnalyticsCard;
