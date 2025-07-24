import React from 'react';
import { Search } from 'lucide-react';
import { AgentCard, BreadcrumbNavigator } from '../components';
import mockData from '@mocks';

// Main Page Component
export const AgentsPage: React.FC = () => {
  return (
    <section className="flex flex-col w-full gap-10 px-4 py-6 mx-auto sm:max-w-3xl md:max-w-4xl lg:max-w-7xl lg:px-0">
      <BreadcrumbNavigator
        paths={[
          { label: 'Home', href: '/' },
          { label: 'Agents', isCurrent: true },
        ]}
      />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl">
          Our Agents
        </h2>

        {/* Agent Card Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {mockData.agentProfiles.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </div>
    </section>
  );
};
