import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../components/Button";

const UserDetailes = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  return (
    <>
    <div className="container mx-auto max-w-lg py-10">
      <ul className=" bg-orange-100 bg-opacity-25 divide-y divide-gray-200 rounded-xl border border-gray-200 shadow-sm ">
        <li key={user.id} className="p-4 text-lg font-medium leading-loose">
          {user.name}
        </li>
        <li key={user.id} className="p-4 text-lg font-medium leading-loose">
          {user.email}
        </li>
        <li key={user.id} className="p-4 text-lg font-medium leading-loose">
          {user.phone}
        </li>
      </ul>
    </div>
     <Link to="/users">
        <Button btnName={"Back"} handleClick={() => {}} />
      </Link>
      </>
  );
};
export default UserDetailes;
