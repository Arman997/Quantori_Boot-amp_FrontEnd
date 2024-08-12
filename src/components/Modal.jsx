const Modal = ({ show, onClose }) => {
    if (!show) return null;
  
    useEffect(()=>{
    
    },[isOpen])
    return (
      <>
            {show && <Login setIsopen={onClose}/> }
         
      </>
    )
    
  };


  export default Modal