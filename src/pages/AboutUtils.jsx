
const AboutItem = ({ label, value, isLink = false, linkHref }) => {
    return (
      <div className="login-wrapper relative flex flex-col gap-4 sm:w-[75%] w-full">
        <label className='absolute top-[-12px] left-[10px] px-[10px] bg-white font-light text-custom-color'>
          {label}
        </label>
        {isLink ? (
          <a href={linkHref} className='w-full border-custom-color p-[5px] border border-solid border-[1px] rounded-sm text-center'>
            <span className='text-custom-color '>{value}</span>
          </a>
        ) : (
          <span className='w-full border-custom-color p-[5px] border border-solid border-[1px] rounded-sm text-custom-color text-center'>
            {value}
          </span>
        )}
      </div>
    );
  };
  
  export default AboutItem;