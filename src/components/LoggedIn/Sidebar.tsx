import { LoadingOverlay } from "@mantine/core";
import { NavLink, useLocation } from "react-router-dom";
import { BiChevronDown, BiLogOut } from "react-icons/bi";
import { useState, Fragment } from "react";
import { useDisclosure } from "@mantine/hooks";
import ConfirmLogout from "./ConfirmLogout";
import LogoMark from "../../assets/svgs/PROJECT-X.svg";
import {
  ConfigurationIcon,
  DashboardIcon,
  ExpensesIcon,
  InboxIcon,
  PayableIcon,
  ReceiveablesIcon,
  ReportsIcon,
} from "./Svgs/Svgs";

type Props = {
  openMobileNav?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ openMobileNav }: Props) => {
  const [loading] = useState(false);
  const [showChildren, setShowChildren] = useState<string>("");
  const [opened, { open, close }] = useDisclosure(false);

  const location = useLocation();
  // const navigate = useNavigate();

  const routes = [
    {
      title: "Overview",
      icon: <DashboardIcon />,
      route: "/overview",
    },
    {
      title: "Inbox",
      icon: <InboxIcon />,
      route: "/inbox",
    },
    {
      title: "Receiveables",
      icon: <ReceiveablesIcon />,
      route: "/receiveables",
    },
    {
      title: "Payables",
      icon: <PayableIcon />,
      route: "/payables",
      key: ["bills", "approvals", "payment-out", "create-bills"],
      children: [
        {
          title: "Bills",
          route: "bills",
        },
        {
          title: "Approvals",
          route: "approvals",
        },
        {
          title: "Payment out",
          route: "payment-out",
        },
        {
          title: "Procurements",
          route: "procurements",
        },
      ],
    },
    {
      title: "Reports",
      icon: <ReportsIcon />,
      route: "/reports",
    },
    {
      title: "Configuration",
      icon: <ConfigurationIcon />,
      route: "/configuration",
    },
    {
      title: "Expenses",
      icon: <ExpensesIcon />,
      route: "/expenses",
    },
  ];

  return (
    <Fragment>
      <ConfirmLogout close={close} opened={opened} />
      <LoadingOverlay visible={loading} />
      <aside className="flex w-full h-full flex-col px-[22px] lg:border-r">
        <div className="w-full">
          <img src={LogoMark} alt="" className="mt-8" />

          <div className="grid gap-5 text-sm sm:text-base mt-8">
            {routes.map((item: any) => (
              <Fragment key={item.title}>
                {item.children ? (
                  <>
                    <div
                      className={`flex gap-2 items-center transition-all duration-300 cursor-pointer ${
                        item.key.includes(location.pathname.split("/")[1]) &&
                        showChildren !== item.title
                          ? "bg-primary text-white rounded-full p-2 font-bold"
                          : ""
                      }`}
                      key={item.title}
                      onClick={() => {
                        if (showChildren === item.title) {
                          setShowChildren("");
                        } else {
                          setShowChildren(item.title);
                        }
                      }}
                    >
                      <span className="text-primary bg-primary rounded-full">
                        {item.icon}
                      </span>
                      <div className="flex items-center justify-between w-full">
                        <div>{item.title}</div>

                        <BiChevronDown
                          className={`arrow-down ${
                            showChildren === item.title
                              ? "rotate-180 transition-all duration-300"
                              : ""
                          }`}
                          size={18}
                        />
                      </div>
                    </div>

                    {showChildren === item.title &&
                      item.children.map((child: any) => (
                        <NavLink
                          key={child.title}
                          className={({ isActive }) =>
                            [
                              "pl-5 text-sm",
                              isActive
                                ? "bg-primary text-white rounded-full py-2 font-bold"
                                : null,
                            ]
                              .filter(Boolean)
                              .join(" ")
                          }
                          onClick={() => openMobileNav && openMobileNav(false)}
                          to={child.route}
                        >
                          <div>{child.title}</div>
                        </NavLink>
                      ))}
                  </>
                ) : (
                  <NavLink
                    key={item.title}
                    className={({ isActive }) =>
                      [
                        "flex gap-2 items-center",

                        isActive ||
                        (item.route === "/dashboard" &&
                          location.pathname === "/")
                          ? "rounded-full font-bold bg-primary text-white p-2"
                          : null,
                      ]
                        .filter(Boolean)
                        .join(" ")
                    }
                    onClick={() => openMobileNav && openMobileNav(false)}
                    to={item.route}
                  >
                    <span>{item.icon}</span>
                    <div>{item.title}</div>
                  </NavLink>
                )}
              </Fragment>
            ))}
          </div>
        </div>

        <div
          className="flex gap-2 items-center pt-3 text-white cursor-pointer"
          onClick={open}
        >
          <BiLogOut
            size={18}
            color="white"
            className="rotate-180 cursor-pointer"
          />
          <div>Logout</div>
        </div>
      </aside>
    </Fragment>
  );
};

export default Sidebar;
