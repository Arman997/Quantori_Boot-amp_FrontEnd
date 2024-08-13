import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/Contact';

function App() {
  const [isopen, setIsopen] = useState(false);

  useEffect(() => {
    
  
  }, [isopen]);

  return (
    <Router>
      <div className='h-screen relative'>
        <Header setIsopen={setIsopen} />
          <>
          <div className="container_1">
            <div className='item1 h-full bg-[#66837E]'></div>
            <div className='item2 h-full bg-[#9D4E2D]'></div>
            <div className='item3 h-full bg-[#495F4B] items-center flex'> </div>
            <div className='item4 h-full bg-[#DD9857]'></div>
            <div className="item5 h-full bg-[#9DABB6]"></div>  
              <Routes>
                <Route path="/" element={<LoginPage isOpen={isopen} setIsopen={setIsopen} />} />
                <Route path="/login" element={<LoginPage setIsopen={setIsopen} />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about" element={<About />} />
              </Routes>
          </div>
          </>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
