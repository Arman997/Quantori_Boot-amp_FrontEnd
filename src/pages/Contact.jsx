import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

function ContactPage() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  useEffect(()=>{

  },[user])
  if(!isAuthenticated || !user)
    return null
  return (
    <> 
      <div className='absolute w-max translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] bg-white w-[199px] h-[100px] flex flex-col items-center p-[20px] gap-[30px] border-[2px] border-custom-color rounded shadow-2xl justify-center'>
          <div className="login-wrapper relative flex flex-col w-[100%]">
                <label className='absolute top-[-12px] left-[10px] px-[10px] bg-white font-light text-custom-color'>Email</label>
                <a href={'mailto:' + user.email} className='w-full border-custom-color p-[5px] border border-solid border-[1px] rounded-sm text-center'><span className='text-custom-color'>{user.email}</span></a>
          </div>
      </div>
    </>
  )
}

export default ContactPage