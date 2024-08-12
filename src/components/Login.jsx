import React from 'react'


function Login({setIsopen}) {

   

  return (
    <div className='logindiv absolute top-[50%] translate-y-[-50%] flex justify-center items-center w-full '>
        <form action="" className='flex flex-col justify-center gap-[50px] items-center bg-[#fff] p-5 min-h-[400px] min-w-[350px] rounded-lg relative'>
            
            <span className='text-custom-color absolute top-[9%] left-[9.2%] text-lg'>Login</span>
            
            <div className="login-wrapper relative flex flex-col gap-4 w-[90%]">
                <label className='absolute top-[-12px] left-[10px] px-[10px] bg-white font-light text-custom-color ' htmlFor='email'>Email</label>
                <input type="email" className='w-full border-custom-color p-[10px] border border-solid border-[1px] rounded-sm ' id="email" placeholder='example@abc.io' />
            </div>
            
            <div className=" relative flex flex-col gap-4 w-[90%]">
                <label className='absolute top-[-12px] left-[10px] px-[10px] bg-white font-light text-custom-color ' htmlFor='password'>Password</label>
                <input type="password" className='w-full border-custom-color p-[10px] border-solid border-[1px] rounded-sm ' id="password" />
            </div>
            
            <div className="flex items-center gap-[20px] ">
                <button className='text-custom-color text-center border-custom-color border-solid border-[1px] py-0.5 px-8 rounded-md ' onClick={()=>setIsopen(false)} >Close</button>
                <button className='text-custom-color text-center border-custom-color border-solid border-[1px] py-0.5 px-8 rounded-md '>Login</button>      
            </div>
        </form>  
    
    </div>
  )
}

export default Login