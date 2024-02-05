import { NavLink } from "react-router-dom";
import {
  FaUsersCog,
  ImLab,
  IoSearch,
  AiFillDashboard,
  ImDisplay,
  RiBankFill,
  FaLockOpen,
  FaUser,
  MdInsertChart,
} from "../../assets/Icons/Icons";
import { logo } from "../../assets/Images/Images";

const SideMenu = () => {
  const sideLinks = [
    { path: "/", icon: AiFillDashboard },
    { path: "search", icon: IoSearch },
    { path: "feature", icon: ImLab },
    { path: "bank", icon: RiBankFill },
    { path: "monitor", icon: ImDisplay },
    { path: "lock", icon: FaLockOpen },
    { path: "chart", icon: MdInsertChart },
    { path: "account-setting", icon: FaUsersCog },
    { path: "account", icon: FaUser },
  ];
  return (
    <aside className="w-12 h-full  bg-dark-gray py-3">
      <img src={logo} alt="" className="w-10 h-10 p-2" />
      <div className="flex flex-col gap-2 mt-7">
        {sideLinks.map((item, index) => (
          <NavLink to={item.path} key={index}>
            <button className="text-[#80817C] text-center   mx-auto text-2xl py-1 border-l-[3px] border-transparent focus:border-info active:border-info  hover:border-info w-full px-2">
              {item.icon()}
            </button>
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default SideMenu;
