import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";

const UserTable: React.FC = () => {
  const { users } = useUserContext();
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());

  const toggleRow = (id: number) => {
    setExpandedRows((prev) => {
      const newSet = new Set(prev);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Company</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <React.Fragment key={user.id}>
              <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.company.name}</td>
                <td className="border px-4 py-2">
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={() => toggleRow(user.id)}
                  >
                    {expandedRows.has(user.id)
                      ? "Hide Details"
                      : "Show Details"}
                  </button>
                </td>
              </tr>
              {expandedRows.has(user.id) && (
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td colSpan={5} className="px-4 py-2">
                    <div>
                      <strong>Address:</strong> {user.address.street},{" "}
                      {user.address.city}
                    </div>
                    <div>
                      <strong>Phone:</strong> {user.phone}
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
