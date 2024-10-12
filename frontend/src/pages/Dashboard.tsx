import DashboardLoanRequests from "../features/loans/Dashboard/DashboardLoanRequests";
import DashboardAcceptedLoanRequests from "../features/loans/Dashboard/DashboardAcceptedLoanRequests";
import DashboardDeniedLoanRequests from "../features/loans/Dashboard/DashboardDeniedLoanRequests";

function Dashboard() {

  return (
    <div className="flex flex-col w-full h-full gap-10 p-20">
      <section className="flex flex-col gap-5 items-start w-full h-1/2">
        <h1 className="dark:text-white font-bold text-xl">Loan Requests</h1>
        <div className="w-full h-full bg-custom-primary-dark rounded-sm overflow-scroll p-2">
          <DashboardLoanRequests />
        </div>
      </section>
      <section className="flex flex-col gap-5 items-start w-full h-1/2">
        <h1 className="dark:text-white font-bold text-xl">Accepted Loan Requests</h1>
        <div className="w-full h-full bg-custom-primary-dark rounded-sm p-2 overflow-scroll">
          <DashboardAcceptedLoanRequests />
        </div>
      </section>
      <section className="flex flex-col gap-5 items-start w-full h-1/2">
        <h1 className="dark:text-white font-bold text-xl">Denied Requests</h1>
        <div className="w-full h-full bg-custom-primary-dark rounded-sm overflow-scroll">
          <DashboardDeniedLoanRequests />
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
