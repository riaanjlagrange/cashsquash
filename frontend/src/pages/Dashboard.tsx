
function Dashboard() {
  return (
    <div className="grid grid-cols-4 w-full h-full gap-10 p-10">
      <section className="flex flex-col gap-5 items-start col-span-4">
        <h1 className="dark:text-white font-bold text-xl">Notifications</h1>
        <div className="w-full h-full bg-custom-primary-dark rounded-lg"></div>
      </section>
      <section className="flex flex-col gap-5 items-start col-span-2">
        <h1 className="dark:text-white font-bold text-xl">My Loans</h1>
        <div className="w-full h-full bg-custom-primary-dark rounded-lg"></div>
      </section>
      <section className="flex flex-col gap-5 items-start col-span-2">
        <h1 className="dark:text-white font-bold text-xl">Requested Loans</h1>
        <div className="w-full h-full bg-custom-primary-dark rounded-lg"></div>
      </section>
    </div>
  );
}

export default Dashboard;
