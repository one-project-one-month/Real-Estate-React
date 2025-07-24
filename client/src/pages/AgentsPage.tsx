import React from 'react';
import { Mail, MapPin, Phone, MessageCircle, Search } from 'lucide-react';
import { Button } from '@ui';
import { useNavigate } from 'react-router-dom';

interface Agent {
  refId: string;
  name: string;
  email: string;
  address: string;
  bio: string;
  imageUrl: string;
}

// Agent Card
const AgentCard: React.FC<{ agent: Agent }> = ({ agent }) => {
  const nav = useNavigate();
  return (
    <div className="relative flex flex-col gap-5 p-4 transition-shadow duration-300 bg-white border border-gray-200 shadow-md rounded-xl sm:flex-row sm:items-center hover:shadow-lg">
      <p className="absolute text-sm font-bold text-red-500 top-4 right-4">
        REF. {agent.refId}
      </p>

      <div className="flex flex-col items-center flex-shrink-0 w-full gap-4 sm:w-40">
        <img
          src={agent.imageUrl}
          alt={agent.name}
          className="object-cover border-4 border-gray-100 rounded-full w-28 h-28"
        />
        <div className="w-full space-y-2">
          <Button>
            <Phone size={16} /> Call
          </Button>
          <Button>
            <MessageCircle size={16} /> Message
          </Button>
        </div>
      </div>

      {/* --- Right Column: Info --- */}
      <div className="flex flex-col flex-1 text-center sm:text-left ms-5">
        <h3 className="mt-5 text-xl font-bold text-gray-800">{agent.name}</h3>
        <div className="flex items-center justify-center gap-2 mt-1 text-sm text-blue-600 sm:justify-start">
          <Mail size={14} />
          <span>{agent.email}</span>
        </div>
        <div className="flex items-start justify-center gap-2 mt-2 text-sm text-gray-500 sm:justify-start">
          <MapPin size={14} className="mt-0.5 flex-shrink-0" />
          <span>{agent.address}</span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          {agent.bio}
        </p>
        <div className="mt-4 text-center sm:text-right">
          <button onClick={() => nav(`/agent/${agent.refId}`)} className="px-4 py-1.5 text-xs font-semibold border border-gray-300 text-gray-600 rounded-md hover:bg-gray-100">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Page Component
export const AgentsPage: React.FC = () => {
  const agents: Agent[] = [
    {
      refId: '123456',
      name: 'Olivia Carter',
      email: 'olivia.carter@pwel-sar.com',
      address: 'No.1, Thiri Myitta Street, Hlaing Township, Yangon',
      bio: 'Passionate about connecting clients with their dream properties. Olivia brings over 8 years of real estate experience.',
      imageUrl: 'https://i.pravatar.cc/150?u=olivia',
    },
    {
      refId: '123457',
      name: 'Benjamin Lee',
      email: 'ben.lee@pwel-sar.com',
      address: 'No.2, Oak Street, Kamayut Township, Yangon',
      bio: 'Specializing in luxury condos and modern family homes. Known for his sharp negotiation skills and market insights.',
      imageUrl: 'https://i.pravatar.cc/150?u=benjamin',
    },
    {
      refId: '123458',
      name: 'Sophia Chen',
      email: 'sophia.chen@pwel-sar.com',
      address: 'No.3, Pine Avenue, Bahan Township, Yangon',
      bio: 'With a background in architecture, Sophia has a unique eye for property potential and investment opportunities.',
      imageUrl: 'https://i.pravatar.cc/150?u=sophia',
    },
    {
      refId: '123459',
      name: 'Daniel Aung',
      email: 'daniel.aung@pwel-sar.com',
      address: 'No.4, Maple Drive, Sanchaung Township, Yangon',
      bio: 'Ensures a smooth and transparent process for all his clients, from first-time buyers to seasoned investors.',
      imageUrl: 'https://i.pravatar.cc/150?u=daniel',
    },
  ];

  return (
    <div className="min-h-screen font-sans bg-gray-50">
      <div className="container px-4 py-8 mx-auto">
        <h1 className="mb-6 text-4xl font-bold text-gray-900">Agents</h1>

        {/* Search Section */}
        <div className="p-4 mb-8 bg-white border border-gray-200 rounded-lg">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="text-gray-400" size={20} />
              </div>
              <input
                type="text"
                placeholder="Search Agent Name"
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button className="w-full sm:w-auto px-8 py-2.5 font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Search
            </button>
          </div>
        </div>

        {/* Breadcrumbs and Title */}
        <nav className="mb-2 text-sm text-gray-500">
          <a href="#" className="text-blue-600 hover:underline">
            Home
          </a>
          <span className="mx-2"></span>
          <span>Agents</span>
        </nav>
        <h2 className="mb-6 text-2xl font-bold text-gray-800">
          Real Estate Agents in Pwel-Sar
        </h2>

        {/* Agent Card Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {agents.map((agent) => (
            <AgentCard key={agent.refId} agent={agent} />
          ))}
        </div>
      </div>
    </div>
  );
};
