import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);

  return (
    <div className="container mx-auto max-w-lg py-10">
    <ul className=" bg-orange-100 bg-opacity-25 divide-y divide-gray-200 rounded-xl border border-gray-200 shadow-sm ">
      {users.map((user) => {
        return (
          <li key={user.id} className="p-4">
            <Link to={`/users/${user.id}`} className="text-lg font-medium leading-loose hover:text-orange-800">
            {user.name}
            </Link>
          </li>
        );
       
      })}
    </ul>
    </div>
  );
};
export default Users;
