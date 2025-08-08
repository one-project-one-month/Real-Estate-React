export const Dashboard = () => {
  return (
    <section className="relative flex flex-col min-h-screen overflow-hidden">
      <div className="relative z-20 flex items-center justify-center flex-1 w-full">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-600">
          Welcome to the admin dashboard. Here you can manage your application
          settings, users, and more.
        </p>
      </div>
    </section>
  );
}