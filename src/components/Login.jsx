import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/actions/authActions'


function Login({setIsopen}) {

   const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
   const token = useSelector((state) => state.auth.token);

   const handleSubmit = async (e) => {
    e.preventDefault();

    
    await dispatch(login(email, password));
    
    
  };
  useEffect(()=>{

    if (isAuthenticated && user) {
      navigate('/about');
    }
  },[isAuthenticated])

  return (
    <div className='logindiv fixed  left-0 top-[50%] translate-y-[-50%] flex justify-center items-center w-full '>
        <form onSubmit={handleSubmit} action="" className='flex flex-col justify-center gap-[50px] items-center bg-[#fff] p-5 min-h-[400px] min-w-[350px] rounded-lg relative'>
            
            <span className='text-custom-color absolute top-[9%] left-[9.2%] text-lg'>Login</span>
            
            <div className="login-wrapper relative flex flex-col gap-4 w-[90%]">
                <label className='absolute top-[-12px] left-[10px] px-[10px] bg-white font-light text-custom-color ' htmlFor='email'>User Name</label>
                <input onChange={(e)=>setEmail(e.target.value)} type="text" className='w-full border-custom-color p-[10px] border border-solid border-[1px] rounded-sm '/>
            </div>
            
            <div className=" relative flex flex-col gap-4 w-[90%]">
                <label className='absolute top-[-12px] left-[10px] px-[10px] bg-white font-light text-custom-color ' htmlFor='password'>Password</label>
                <input onChange={(e)=>setPassword(e.target.value)} type="password" className='w-full border-custom-color p-[10px] border-solid border-[1px] rounded-sm ' id="password" />
            </div>
            
            <div className="flex items-center gap-[20px] ">
                <button className='text-custom-color text-center border-custom-color border-solid border-[1px] py-0.5 px-8 rounded-md ' onClick={()=>setIsopen(false)} >Close</button>
                <button type='submit' className='text-custom-color text-center border-custom-color border-solid border-[1px] py-0.5 px-8 rounded-md '> {!isAuthenticated ? "Login" : "Logout" }</button>      
            </div>
        </form>  
    
    </div>
  )
}

export default Login