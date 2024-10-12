import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import { useState, useEffect } from "react";
import { useAppDispatch } from "./app/hooks";
// import { selectLoanRequests } from "./features/loans/loanRequestsSlice";
import { loadLoanRequests } from "./features/loans/loadLoanRequests";

function App() {

  const [menuExpanded, setMenuExpanded] = useState(true);
  const [columnStyling, setColumnStyling] = useState("");
  const [outletStyling, setOutletStyling] = useState("");

  const dispatch = useAppDispatch()
  // const loanRequestsWithState = useAppSelector(selectLoanRequests);
  // const loanRequests = loanRequestsWithState.loanRequests;

  useEffect(() => {
    dispatch(loadLoanRequests());
  }, [dispatch]);

  const handleToggleMenu = () => {
    return menuExpanded ? setMenuExpanded(false) : setMenuExpanded(true);
  }

  useEffect(() => {
    if (menuExpanded) {
      setColumnStyling("grid-cols-4");
      setOutletStyling("col-span-3");
    } else {
      setColumnStyling("grid-cols-12");
      setOutletStyling("col-span-12");
    }
  }, [columnStyling, menuExpanded]);

  return (
    <>
      <div className={`grid ${columnStyling} w-[100vw] h-[100vh] dark:bg-slate-900 relative `}>
        <Navbar toggleMenu={handleToggleMenu} isMenuExpanded={menuExpanded} />
        <div className={`flex items-center justify-center ${outletStyling}`}>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App;
