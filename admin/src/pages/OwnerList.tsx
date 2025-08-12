import React, { useEffect, useState } from "react";
import { Button } from "@ui";
// import { getOwnersAsync, deleteOwnerAsync } from "../services/owner.service";

export const OwnerList = () => {
  // const [owners, setOwners] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   getOwnersAsync()
  //     .then(data => setOwners(data))
  //     .finally(() => setLoading(false));
  // }, []);

  // const handleDelete = async (id) => {
  //   await deleteOwnerAsync(id);
  //   setOwners((prev) => prev.filter((owner) => owner.id !== id));
  // };

  // Example data for UI preview
  const owners = [
    { id: "O-001", name: "Emma Johnson", email: "emma@example.com" },
    { id: "O-002", name: "Liam Smith", email: "liam@example.com" },
    { id: "O-003", name: "Olivia Davis", email: "olivia@example.com" },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold tracking-tight">Owner List</h2>
        <Button size="sm" variant="default" onClick={() => console.log("Add Owner")}>
          + Add Owner
        </Button>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
        <table className="min-w-full divide-y divide-gray-200 bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                ID
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Email
              </th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {owners.map((owner) => (
              <tr
                key={owner.id}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="px-4 py-3 text-sm text-gray-800">{owner.id}</td>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">
                  {owner.name}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {owner.email}
                </td>
                <td className="px-4 py-3 flex justify-end gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => console.log("Show", owner.id)}
                  >
                    Show
                  </Button>
                  <Button
                    size="sm"
                    variant="info"
                    onClick={() => console.log("Edit", owner.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => console.log("Delete", owner.id)}
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
