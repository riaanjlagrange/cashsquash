import { MdDashboard } from "react-icons/md";
import { FaUserFriends, FaChevronRight, FaChevronDown } from "react-icons/fa";
import { FaWallet, FaMoneyCheckDollar, FaGear, FaBars, FaBarsStaggered } from "react-icons/fa6";
import { NavLink, Link, useNavigate } from "react-router-dom";
// temp profile icon
import { CgProfile } from "react-icons/cg";
import { useState } from "react";

function Navbar({ toggleMenu, isMenuExpanded }: { toggleMenu: () => void, isMenuExpanded: boolean }) {
  const [requestsMenuToggled, setRequestsMenuToggled] = useState(false);

  const navigate = useNavigate();

  const handleNewRequestClick = () => {
    navigate("/new-request");
  }

  const handleMenuClick = () => {
    toggleMenu();
  }

  const handleToggleLoanRequestsMenu = () => {
    setRequestsMenuToggled(requestsMenuToggled ? false : true);
  }

  const activeStyle = "text-custom-primary-default flex items-center justify-between";
  const normalStyle = "text-white flex items-center justify-between hover:text-custom-accent-bright transition-all";

  if (!isMenuExpanded) {
    return (
      <div className="absolute left-5 top-5">
        <button className="p-2 rounded-sm" onClick={handleMenuClick}>
          <FaBars className="size-5 text-custom-primary-default" />
        </button>
      </div>
    );
  }

  return (
    <nav className="h-[100vh] w-full flex flex-col justify-between px-5 py-3 bg-slate-800 transition-all">
      <div className="flex flex-col gap-20">

        <div className="flex gap-3 items-center">
          <button className="p-2 rounded-sm" onClick={handleMenuClick}>
            <FaBarsStaggered className="size-5 text-custom-primary-default" />
          </button>

          <Link to="/dashboard" className="px-5 py-3 flex justify-start items-center gap-5">
            <img src="/logo.webp" className="w-8 h-8 rounded-md" alt="CashSquash Logo" />
            <span className="font-bold dark:text-white text-2xl">CashSquash</span>
          </Link>
        </div>

        <ul className="flex flex-col gap-2 items-center">
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
            <button className="text-white flex items-center justify-between hover:text-custom-accent-bright transition-all w-full" onClick={handleToggleLoanRequestsMenu}>
              <div className="flex gap-4 justify-center items-center">
                <FaMoneyCheckDollar className="size-6" />
                <span className="text-xl">Loan Requests</span>
              </div>
              {requestsMenuToggled ? <FaChevronDown className="font-light text-white" /> : <FaChevronRight className="font-light text-white" />}
            </button>

            <ul className={requestsMenuToggled ? 'flex flex-col gap-2 items-start px-10 mt-5' : 'hidden'}>
              <li className="w-full py-1">
                <NavLink to="/all-requests" className={({ isActive }) => (
                  isActive ? activeStyle : normalStyle
                )}>
                  <div className="flex gap-4 justify-center items-center">
                    <span className="text-xl">All Requests</span>
                  </div>
                </NavLink>
              </li>

              <li className="w-full py-1">
                <NavLink to="/loan-requests" className={({ isActive }) => (
                  isActive ? activeStyle : normalStyle
                )}>
                  <div className="flex gap-4 justify-center items-center">
                    <span className="text-xl">Pending Requests</span>
                  </div>
                </NavLink>
              </li>

              <li className="w-full py-1">
                <NavLink to="/accepted-loan-requests" className={({ isActive }) => (
                  isActive ? activeStyle : normalStyle
                )}>
                  <div className="flex gap-4 justify-center items-center">
                    <span className="text-xl">Accepted Requests</span>
                  </div>
                </NavLink>
              </li>

              <li className="w-full py-1">
                <NavLink to="/denied-loan-requests" className={({ isActive }) => (
                  isActive ? activeStyle : normalStyle
                )}>
                  <div className="flex gap-4 justify-center items-center">
                    <span className="text-xl">Denied Requests</span>
                  </div>
                </NavLink>
              </li>
            </ul>

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
          <button onClick={handleNewRequestClick} className="px-10 py-3 bg-custom-primary-default mt-5 text-slate-900 w-full hover:bg-custom-primary-ligth transition-all rounded-sm">New Request</button>
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
