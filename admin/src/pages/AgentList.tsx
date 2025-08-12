import React from "react";
import { Button } from "@ui";

export const AgentList = () => {
  // Example data (you can replace with props or API data)
  const agents = [
    { id: "A-1001", name: "John Smith", email: "john@example.com" },
    { id: "A-1002", name: "Sarah Lee", email: "sarah@example.com" },
    { id: "A-1003", name: "Michael Brown", email: "michael@example.com" },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold tracking-tight">Agent List</h2>
        <Button size="sm" variant="default" onClick={() => console.log("Add Agent")}>
          + Add Agent
        </Button>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
        <table className="min-w-full divide-y divide-gray-200 bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">ID</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {agents.map((agent) => (
              <tr
                key={agent.id}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="px-4 py-3 text-sm text-gray-800">{agent.id}</td>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">
                  {agent.name}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">{agent.email}</td>
                <td className="px-4 py-3 flex justify-end gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => console.log("Show", agent.id)}
                  >
                    Show
                  </Button>
                  <Button
                    size="sm"
                    variant="info"
                    onClick={() => console.log("Edit", agent.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => console.log("Delete", agent.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
