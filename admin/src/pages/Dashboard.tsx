import React from "react";

// Card Component
function StatCard({ title, value, description, icon }) {
  return (
    <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
      {/* Header */}
      <div className="@container/card-header auto-rows-min grid-rows-[auto_auto] gap-1.5 px-6 
                      has-data-[slot=card-action]:grid-cols-[1fr_auto] 
                      [.border-b]:pb-6 flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="text-sm font-medium">{title}</div>
        <div className="text-muted-foreground h-4 w-4">{icon}</div>
      </div>

      {/* Content */}
      <div className="px-6">
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-muted-foreground text-xs">{description}</p>
      </div>
    </div>
  );
}

// Parent Component
export const Dashboard = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      description: "+20.1% from last month",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      title: "Subscriptions",
      value: "+2350",
      description: "+180.1% from last month",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      title: "Sales",
      value: "+12,234",
      description: "+19% from last month",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="5" rx="2"></rect>
          <path d="M2 10h20"></path>
        </svg>
      )
    },
    {
      title: "Active Now",
      value: "+573",
      description: "+201 since last hour",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      )
    }
  ];

  const recentSalesData = [
    {
      initials: "OM",
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      amount: "+$1,999.00",
    },
    {
      initials: "JL",
      name: "Jackson Lee",
      email: "jackson.lee@email.com",
      amount: "+$39.00",
      bordered: true,
    },
    {
      initials: "IN",
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      amount: "+$299.00",
    },
    {
      initials: "WK",
      name: "William Kim",
      email: "will@email.com",
      amount: "+$99.00",
    },
    {
      initials: "SD",
      name: "Sofia Davis",
      email: "sofia.davis@email.com",
      amount: "+$39.00",
    },
  ];

  const RecentSalesCard = ({ sales = recentSalesData }) => {
    return (
      <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm col-span-1 lg:col-span-3">
        <div
          data-slot="card-header"
          className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
        >
          <div data-slot="card-title" className="leading-none font-semibold">
            Recent Sales
          </div>
          <div data-slot="card-description" className="text-muted-foreground text-sm">
            You made {sales.length} sales this month.
          </div>
        </div>

        <div data-slot="card-content" className="px-6">
          <div className="space-y-8">
            {sales.map(({ initials, name, email, amount, bordered }, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-4 ${bordered ? "border" : ""
                  } rounded-md p-1`}
              >
                <span
                  data-slot="avatar"
                  className={`relative flex size-8 shrink-0 overflow-hidden rounded-full h-9 w-9 items-center justify-center ${bordered ? "border" : ""
                    }`}
                >
                  <span
                    data-slot="avatar-fallback"
                    className="bg-muted flex size-full items-center justify-center rounded-full"
                  >
                    {initials}
                  </span>
                </span>

                <div className="flex flex-1 flex-wrap items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm leading-none font-medium">{name}</p>
                    <p className="text-muted-foreground text-sm">{email}</p>
                  </div>
                  <div className="font-medium">{amount}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          description={stat.description}
          icon={stat.icon}
        />
      ))}

      <RecentSalesCard sales={recentSalesData} />
    </div>

  );
}
