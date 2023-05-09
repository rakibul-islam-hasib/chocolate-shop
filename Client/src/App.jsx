import React from 'react';
import { Outlet } from 'react-router';
import { useNavigate, useLocation } from 'react-router-dom'
const App = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  document.title = 'Chocolate Management System';
  return (
    <>
      <div className="my-bg rounded-lg w-[50%] mx-auto text-center px-7 py-3 text-white my-8">
        <h1 className='uppercase text-2xl font-bold'>Chocolate Management System</h1>
      </div>
      <div className="w-[85%] mx-auto">
        <div onClick={() => navigate(`${location.pathname === '/chocolate/new' ? '/' : '/chocolate/new'}`)} className="border-2 hover:cursor-pointer w-fit px-4 py-2 rounded-xl">
          <button className='inline-flex text-2xl items-center gap-3'>{location.pathname === '/chocolate/new' ? 'Back To Home' : 'Add Chocolate'}
            <img className='w-[25px]' src="https://i.ibb.co/SNJ2hgz/chocolate.png" alt="" />
          </button>
        </div>
        <div className="">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default App;