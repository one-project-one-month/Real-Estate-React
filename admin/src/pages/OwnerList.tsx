import React, { useEffect, useState } from 'react';
import { Button } from '@ui';
// import { getOwnersAsync, deleteOwnerAsync } from '../services/owner.service';

export const OwnerList = () => {
  // const [owners, setOwners] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   getOwnersAsync()
  //     .then(data => setOwners(data))
  //     .finally(() => setLoading(false));
  // }, []);

  // const handleDelete = async (id: number) => {
  //   await deleteOwnerAsync(id);
  //   setOwners(owners.filter(owner => owner.id !== id));
  // };

  // if (loading) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Owner List</h2>
      <table className="min-w-full border">
        <thead>
          <tr>
            <th className="border px-2 py-1">ID</th>
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1">Email</th>
            <th className="border px-2 py-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* {owners.map(owner => ( */}
          {/* <tr key={owner.id}> */}
          <tr>
            <td className="border px-2 py-1">OwnerId</td>
            <td className="border px-2 py-1">OwnerName</td>
            <td className="border px-2 py-1">OwnerEamil</td>
            <td className="border px-2 py-1 flex gap-2">
              <Button size="sm" variant="ghost" onClick={() => {/* show logic */ }}>Show</Button>
              <Button size="sm" variant="info" onClick={() => {/* edit logic */ }}>Edit</Button>
              <Button size="sm" variant="destructive" onClick={() => {/* delete logic */ }}>Delete</Button>
              {/* <Button size="sm" variant="destructive" onClick={() => handleDelete(owner.id)}>Delete</Button> */}
            </td>
          </tr>
          {/* ))} */}
        </tbody>
      </table>
    </div>
  );
}