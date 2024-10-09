import { MdDashboard } from "react-icons/md";
import { FaUserFriends, FaChevronRight } from "react-icons/fa";
import { FaMoneyBills, FaWallet, FaMoneyCheckDollar, FaGear } from "react-icons/fa6";
import { NavLink, Link } from "react-router-dom";

// temp logo
import { SiCashapp } from "react-icons/si";
// temp profile icon
import { CgProfile } from "react-icons/cg";

function Navbar() {

  const activeStyle = "text-custom-accent-bright flex items-center justify-between";
  const normalStyle = "text-white flex items-center justify-between hover:text-custom-accent-bright transition-all";

  return (
    <nav className="h-[100vh] w-1/4 flex flex-col justify-between px-5 py-3 bg-slate-800">

      <div className="flex flex-col gap-20">
        <Link to="/" className="px-5 py-3 flex justify-starr items-center gap-5">
          <SiCashapp className="size-8 text-white" />
          <span className="font-bold dark:text-white text-2xl">CashSquash</span>
        </Link>
        <ul className="flex flex-col gp-2 items-center">

          <li className="w-full px-5 py-3">
            <NavLink to="/dashboard" className={({ isActive }) => (
              isActive ? activeStyle : normalStyle
            )}>
              <div className="flex gap-4 justify-center items-center">
                <MdDashboard className="size-6" />
                <span className="text-xl">Dashboard</span>
              </div>
              <FaChevronRight className="font-light text-white" />
            </NavLink>
          </li>

          <li className="w-full px-5 py-3">
            <NavLink to="/my-loans" className={({ isActive }) => (
              isActive ? activeStyle : normalStyle
            )}>
              <div className="flex gap-4 justify-center items-center">
                <FaMoneyCheckDollar className="size-6" />
                <span className="text-xl">My Loans</span>
              </div>
              <FaChevronRight className="font-light text-white" />
            </NavLink>
          </li>

          <li className="w-full px-5 py-3">
            <NavLink to="/payment-history" className={({ isActive }) => (
              isActive ? activeStyle : normalStyle
            )}>
              <div className="flex gap-4 justify-center items-center">
                <FaMoneyBills className="size-6" />
                <span className="text-xl">Payment History</span>
              </div>
              <FaChevronRight className="font-light text-white" />
            </NavLink>
          </li>

          <li className="w-full px-5 py-3">
            <NavLink to="/friends" className={({ isActive }) => (
              isActive ? activeStyle : normalStyle
            )}>
              <div className="flex gap-4 justify-center items-center">
                <FaUserFriends className="size-6" />
                <span className="text-xl">Friends</span>
              </div>
              <FaChevronRight className="font-light text-white" />
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-5 mb-16">
        <ul>
          <li className="w-full px-5 py-3">
            <NavLink to="/settings" className={({ isActive }) => (
              isActive ? activeStyle : normalStyle
            )}>
              <div className="flex gap-4 justify-center items-center">
                <FaGear className="size-6" />
                <span className="text-xl">Settings</span>
              </div>
              <FaChevronRight className="font-light text-white" />
            </NavLink>
          </li>
          <li className="w-full px-5 py-3">
            <NavLink to="/my-wallet" className={({ isActive }) => (
              isActive ? activeStyle : normalStyle
            )}>
              <div className="flex gap-4 justify-center items-center">
                <FaWallet className="size-6" />
                <span className="text-xl">My Wallet</span>
              </div>
              <FaChevronRight className="font-light text-white" />
            </NavLink>
          </li>
        </ul>

        <Link to="/profile" className="flex gap-5 items-center px-5">
          <CgProfile className="size-8 rounded-full bg-custom-accent-bright" />
          <span className="text-white font-bold text-lg hover:text-custom-accent-bright transition-all">riaanjlagrange</span>
        </Link>
      </div>
    </nav >
  );
}

export default Navbar;
