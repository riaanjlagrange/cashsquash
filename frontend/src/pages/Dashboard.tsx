import DashboardLoanRequests from "../features/loans/DashboardLoanRequests";

function Dashboard() {

  return (
    <div className="grid grid-cols-4 w-full h-full gap-10 p-20">
      <section className="flex flex-col gap-5 items-start col-span-4">
        <h1 className="dark:text-white font-bold text-xl">Notifications</h1>
        <div className="w-full h-full bg-custom-primary-dark rounded-sm"></div>
      </section>
      <section className="flex flex-col gap-5 items-start col-span-2">
        <h1 className="dark:text-white font-bold text-xl">My Loans</h1>
        <div className="w-full h-full bg-custom-primary-dark rounded-sm">
          <DashboardLoanRequests />
        </div>
      </section>
      <section className="flex flex-col gap-5 items-start col-span-2">
        <h1 className="dark:text-white font-bold text-xl">Loan Requests</h1>
        <div className="w-full h-full bg-custom-primary-dark rounded-sm"></div>
      </section>
    </div>
  );
}

export default Dashboard;
