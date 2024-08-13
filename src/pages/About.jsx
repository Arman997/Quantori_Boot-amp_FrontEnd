import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AboutItem from './AboutUtils';




function About() {
      const dispatch = useDispatch();
      const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
      const token = useSelector((state) => state.auth.token);
      const user = useSelector((state) => state.auth.user);
      const navigate = useNavigate();
      if(!isAuthenticated)
      {
            navigate("/")
            return null
      }
      useEffect(()=>{

            if(!isAuthenticated)
            {
                  navigate("/");
            }
      },[user])
            
      if(!isAuthenticated || !user)
            return null            
            const userDetails = [
                  { label: 'UserName', value: user.username },
                  { label: 'FirstName', value: user.firstName },
                  { label: 'LastName', value: user.lastName },
                  { label: 'Gender', value: user.gender },
                  { label: 'Email', value: user.email, isLink: true, linkHref: `mailto:${user.email}` }
                ];
              
                return (
                  <div className='absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] bg-white w-[350px] sm:w-[450px] h-[450px] sm:h-[600px]  flex flex-col items-center p-[20px] gap-[30px] border-[2px] border-custom-color rounded shadow-2xl'>
                    <div className='rounded-full border-[2px] border-custom-color box-border w-[62px] h-[62px] sm:w-[200px] sm:h-[200px] overflow-hidden mb-[10px]'>
                      <img className=' w-[100%] h-[100%] object-cover' src={user.image} alt={`${user.firstName} ${user.lastName}`} />
                    </div>
                    {userDetails.map((detail, index) => (
                      <AboutItem
                        key={index}
                        label={detail.label}
                        value={detail.value}
                        isLink={detail.isLink}
                        linkHref={detail.linkHref}
                      />
                    ))}
                  </div>
                );
}

export default About