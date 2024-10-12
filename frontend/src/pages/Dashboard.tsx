import DashboardLoanRequests from "../features/loans/DashboardLoanRequests";

function Dashboard() {

  return (
    <div className="flex flex-col w-full h-full gap-10 p-20">
      <section className="flex flex-col gap-5 items-start">
        {/* still need to add somthing idk*/}
      </section>
      <div className="flex gap-10">
        <section className="flex flex-col gap-5 items-start w-full">
          <h1 className="dark:text-white font-bold text-xl">My Loans</h1>
          <div className="w-full h-full bg-custom-primary-dark rounded-sm"></div>
        </section>
        <section className="flex flex-col gap-5 items-start w-full">
          <h1 className="dark:text-white font-bold text-xl">Loan Requests</h1>
          <div className="w-full h-full bg-custom-primary-dark rounded-sm overflow-scroll">
            <DashboardLoanRequests />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
