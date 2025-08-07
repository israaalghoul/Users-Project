import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import Button from './Button'
import Input from './Input'



const Header = () => {

  const navigate = useNavigate();
  const handleSignin = (e) =>{
    e.preventDefault();
    navigate("/Signin");
}
const handleLogin = (e) =>{
    e.preventDefault();
    navigate("/Login");
}
  return (
    <>

    <nav class="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 border border-slate-100 ">
      <div class="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
        <div class="flex items-center flex-shrink-0 text-gray-800 mr-16">
                <span class="font-semibold text-xl tracking-tight">React App</span>
            </div>
            <div class="block lg:hidden ">
                <button
                    id="nav"
                    class="flex items-center px-3 py-2 border-2 rounded text-orange-700 border-orange-700 hover:text-orange-700 hover:border-orange-700">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
      </div>
      <div class="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
        <div class="text-md font-semibold text-orange-700 lg:flex-grow">
          <Link to={'/'} class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-orange-700 mr-2">Home
            </Link>
            <Link to={'/users'} class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-orange-700 mr-2">Users
            </Link>
        </div>
        <div class="relative mx-auto text-gray-600 lg:block hidden">
          <Input placeHolder={"Search"}/>
        </div>
      </div>
       
        <div class="flex ">
          <Button btnName={"Sign in"} handleClick={handleSignin} className="block text-md px-4 py-2 rounded text-orange-700 ml-2 font-semibold hover:text-white mt-4 hover:bg-orange-700 lg:mt-0"/>
          <Button btnName={"Login"} handleClick={handleLogin} className=" block text-md px-4  ml-2 py-2 rounded text-orange-700 font-semibold hover:text-white mt-4 hover:bg-orange-700 lg:mt-0"/>
            </div>
    </nav>
    

 
    
    </>
  )
}
export default Header
