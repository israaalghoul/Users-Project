import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";

const Header = () => {
  const navigate = useNavigate();
  const handleSignin = (e) => {
    e.preventDefault();
    navigate("/signin");
  };
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  const [dropdownList, setDropdownList] = useState(false);
  console.log(dropdownList);
  useEffect(() => {
    if (dropdownList) {
      console.log(dropdownList);
    }
  }, [dropdownList]);
  return (
    <>
      <nav className="bg-white py-4 lg:px-12 border border-slate-100 ">
        <div className="flex items-center justify-between lg:w-auto w-full flex-wrap pl-6 pr-2">
          <span className="font-semibold text-xl mr-16">React App</span>
          <div className="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8 lg:block hidden">
            <ul className="flex text-md font-semibold text-orange-700 lg:flex-grow">
              <li>
                <Link
                  to={"/"}
                  className="block mt-4 lg:inline-block lg:mt-0 px-4 py-2 hover:text-orange-400 mr-2"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/users"}
                  className="block mt-4 lg:inline-block lg:mt-0 px-4 py-2 hover:text-orange-400 mr-2"
                >
                  Users
                </Link>
              </li>
            </ul>

            <div className="relative mx-auto text-gray-600 ">
              <Input placeHolder={"Search"} />
            </div>
          </div>
          <div className="flex">
            <Button
              btnName={"Sign in"}
              handleClick={handleSignin}
              className="block text-md px-4 py-2 rounded text-orange-700 ml-2 font-semibold hover:text-white mt-4 hover:bg-orange-700 lg:mt-0"
            />
            <Button
              btnName={"Login"}
              handleClick={handleLogin}
              className=" block text-md px-4  ml-2 py-2 rounded text-orange-700 font-semibold hover:text-white mt-4 hover:bg-orange-700 lg:mt-0"
            />
          </div>
          <div className="relative">
            <button
              className="block lg:hidden flex items-center px-3 py-2 border-2 rounded text-orange-700 border-orange-700 hover:text-orange-400 hover:border-orange-400 cursor-pointer"
              onClick={() => setDropdownList(!dropdownList)}
            >
              <i className="fas fa-bars"></i>
            </button>
            {dropdownList && (
              <ul className="absolute left-[-41px] flex flex-col items-center bg-white px-6 py-4 text-gray-700 space-y-4 shadow-md">
                <li>
                  <Link to={"/"} className="hover:bg-gray-100" onClick={() => setDropdownList(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/users"} className="hover:bg-gray-100" onClick={() => setDropdownList(false)}>
                    Users
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
