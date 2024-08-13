import { Disclosure } from "@headlessui/react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MdAccountCircle } from "react-icons/md";
import Login from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/reducers/authReducers";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleMenu = (open) => {
    if(open)
        setIsModalOpen(false)
    setIsOpen(!isOpen);
     document.body.classList.toggle('menu-opened', !isOpen); 
  };

  async function  handleLoginLogout() {
      if(!isAuthenticated)
      {
          setIsModalOpen(true);
      }
    else
    {
        await dispatch(logout());
        navigate("/")
    }
  }

  
  useEffect(()=>{
     
  },[isModalOpen])
  const location = useLocation();
  const [active, setActive] = useState('Home');

  const click = (e) => {
      setActive(e)
  }

  useEffect(()=>{
  },[active])

  const navigation = [
    "/",
    "contact",
    "about",
  ];
  const navigationName = [
    "Home",
    "Contact",
    "About",
  ];

  return (
    <div className="w-full">
      <nav className=" flex flex-wrap items-center w-full mx-auto  py-2 text-nowrap">
        {/* disclosure */}
        <Disclosure>
          {({ open,close }) => (
            <>
              <div className="lg:hidden flex flex-wrap items-center  justify-between w-full lg:w-auto">
                <Link to="/" >
                {(!isAuthenticated && !user) ? (<MdAccountCircle className="w-[50px] h-[50px] text-custom-color"/>) : (<img className="w-[50px] h-[50px]" src={user?.image}/>)}
                 
                </Link>

                <Disclosure.Button
                  onClick={toggleMenu(open)}
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:#8ac7d6 focus:#8ac7d6 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open  && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>
                
                <Disclosure.Panel className={`h-screen flex flex-col gap-y-8 flex-wrap  w-full my-5 lg:hidden overflow-auto`}>
                  <>

                  <ul className="h-full flex flex-col gap-y-8">
                    {navigation.map((item, index) => (
                      <li key={index} className={`w-min px-1.5 py-1 ml-2 py-0 -ml-4 text-custom-color text-nowrap  dark:text-black-300 hover:text-logo_dark_blue focus:outline-none ${location.pathname === "/" + item ? 'border-custom-color border-b-4' : ''}`}>
                      <Link onClick={()=>{close(); toggleMenu()}} key={index} to={"/" + item} >
                          {navigationName[index]}
                      </Link>
                      </li>
                    ))}
                    <li className="w-full px-6 py-2 mt-3 text-center text-custom-color bg-logo_dark_blue rounded-md ">
                        <button onClick={()=>{handleLoginLogout(); close()}}>         
                            {isAuthenticated ?  "Logout" : "login"}
                        </button>
                    </li>
                   
                    </ul>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
            <div className="hidden lg:text-center lg:w-full lg:flex lg:justify-between lg:items-center ">
                        <div className="flex items-center">

                            {(!isAuthenticated && !user) ? (<MdAccountCircle className="w-[50px] h-[50px] text-custom-color"/>) : (<img className="w-[50px] h-[50px]" src={user?.image}/>)}
                            <ul className='grid grid-cols-3 h-fit  odd:bg-white  rounded-[30px] w-max box-border border-solid border-[1px]  border-custom-color'>
                                {navigation.map((elem,key)=>( 
                                    <li onClick={()=>click(elem)} key={key} className={"w-full first:rounded-l-[30px] last:rounded-r-[30px] box-border px-4 py-1 text-align-center  cursor-pointer text-custom-color "} style={active == elem ? {'backgroundColor' :'#66837E', 'color':'white'} : {}} >
                                    <Link to={elem}>{navigationName[key]}</Link>
                                    
                                </li>))}
                            
                            </ul>
                        </div>
        
       
                
                    <button onClick={handleLoginLogout}  className="px-8 py-1 text-white bg-custom-color rounded-lg ">
                        {isAuthenticated ?  "Logout" : "login"}
                    </button>
                           
                
            </div>
                    <div className="absolute top-[50%] " >
                        {(isModalOpen && !isAuthenticated ) && <Login setIsopen={setIsModalOpen} />}
                    </div>  
               
      </nav>
    </div>
  );
}

export default Navbar;