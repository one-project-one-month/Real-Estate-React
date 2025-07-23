import React from 'react';
import { Mail, MapPin, Phone, MessageCircle, Search } from 'lucide-react';


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
  return (
   
    <div className="bg-white border border-gray-200 rounded-xl shadow-md p-4 relative flex flex-col sm:flex-row sm:items-center gap-5 hover:shadow-lg transition-shadow duration-300">
      <p className="absolute top-4 right-4 text-red-500 font-bold text-sm">
        REF. {agent.refId}
      </p>

      <div className="flex-shrink-0 w-full sm:w-40 flex flex-col items-center gap-4">
        <img
          src={agent.imageUrl}
          alt={agent.name}
          className="w-28 h-28 rounded-full object-cover border-4 border-gray-100"
        />
        <div className="w-full space-y-2">
          <button className="w-full py-2 text-sm font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
            <Phone size={16} /> Call
          </button>
          <button className="w-full py-2 text-sm font-semibold border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 flex items-center justify-center gap-2">
            <MessageCircle size={16} /> Message
          </button>
        </div>
      </div>

      {/* --- Right Column: Info --- */}
      <div className="flex-1 flex flex-col text-center sm:text-left ms-5">
        <h3 className="text-xl font-bold text-gray-800 mt-5">{agent.name}</h3>
        <div className="flex items-center gap-2 text-sm text-blue-600 mt-1 justify-center sm:justify-start">
          <Mail size={14} />
          <span>{agent.email}</span>
        </div>
        <div className="flex items-start gap-2 text-sm text-gray-500 mt-2 justify-center sm:justify-start">
          <MapPin size={14} className="mt-0.5 flex-shrink-0" />
          <span>{agent.address}</span>
        </div>
        <p className="text-gray-600 text-sm mt-3 leading-relaxed">
          {agent.bio}
        </p>
        <div className="mt-4 text-center sm:text-right">
          <button className="px-4 py-1.5 text-xs font-semibold border border-gray-300 text-gray-600 rounded-md hover:bg-gray-100">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};


// Main Page Component
const AgentsPage: React.FC = () => {
  const agents: Agent[] = [
    { refId: '123456', name: 'Olivia Carter', email: 'olivia.carter@pwel-sar.com', address: 'No.1, Thiri Myitta Street, Hlaing Township, Yangon', bio: 'Passionate about connecting clients with their dream properties. Olivia brings over 8 years of real estate experience.', imageUrl: 'https://i.pravatar.cc/150?u=olivia' },
    { refId: '123457', name: 'Benjamin Lee', email: 'ben.lee@pwel-sar.com', address: 'No.2, Oak Street, Kamayut Township, Yangon', bio: 'Specializing in luxury condos and modern family homes. Known for his sharp negotiation skills and market insights.', imageUrl: 'https://i.pravatar.cc/150?u=benjamin' },
    { refId: '123458', name: 'Sophia Chen', email: 'sophia.chen@pwel-sar.com', address: 'No.3, Pine Avenue, Bahan Township, Yangon', bio: 'With a background in architecture, Sophia has a unique eye for property potential and investment opportunities.', imageUrl: 'https://i.pravatar.cc/150?u=sophia' },
    { refId: '123459', name: 'Daniel Aung', email: 'daniel.aung@pwel-sar.com', address: 'No.4, Maple Drive, Sanchaung Township, Yangon', bio: 'Ensures a smooth and transparent process for all his clients, from first-time buyers to seasoned investors.', imageUrl: 'https://i.pravatar.cc/150?u=daniel' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Agents</h1>

        {/* Search Section */}
        <div className="mb-8 p-4 bg-white border border-gray-200 rounded-lg">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="text-gray-400" size={20} />
              </div>
              <input type="text" placeholder="Search Agent Name" className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"/>
            </div>
            <button className="w-full sm:w-auto px-8 py-2.5 font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Search
            </button>
          </div>
        </div>

        {/* Breadcrumbs and Title */}
        <nav className="text-sm text-gray-500 mb-2">
          <a href="#" className="text-blue-600 hover:underline">Home</a>
          <span className="mx-2"></span>
          <span>Agents</span>
        </nav>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Real Estate Agents in Pwel-Sar</h2>

        {/* Agent Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {agents.map((agent) => (
            <AgentCard key={agent.refId} agent={agent} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentsPage;