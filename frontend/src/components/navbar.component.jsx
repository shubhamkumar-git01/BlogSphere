import React, { useState, useContext } from 'react'
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Search, Sun, Moon, NotebookPen, Feather } from "lucide-react";
import { UserContext } from "../App";
import UserNavigationPanel from './user-navigation.component';
import { ThemeContext } from '../common/ThemeContext';


const Navbar = () => {

  const [searchBoxVisibility, setSearchBoxVisibility] = useState(false)
  const [userNavPanel, setUserNavPanel] = useState(false)
  const { theme, toggleTheme } = useContext(ThemeContext);

  let navigate = useNavigate()

  const { userAuth, userAuth: { access_token, profile_img } } = useContext(UserContext)


  const handleUserNavPanel = () => {
    setUserNavPanel(currentVal => !currentVal)
  }

  const handleBlur = () => {
    setTimeout(() => {
      setUserNavPanel(false)
    }, 500);
  }

  const handleSearch = (e) => {
    let query = e.target.value

    if (e.keyCode == 13 && query.length) {
      navigate(`/search/${query}`)
    }
  }


  return (
    <>
      <nav className='navbar dark:bg-dark-bg transition-colors duration-300 shadow-premium dark:shadow-premium-dark z-50'>
        <Link to="/" className='flex-none flex items-center gap-3 group'>
          <div className="w-10 h-10 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black transition-transform group-hover:rotate-12 duration-300">
            <Feather size={20} strokeWidth={2.5} />
          </div>
          <span className="text-2xl font-black tracking-tight text-black dark:text-white transition-colors">
            Blog<span className="text-purple dark:text-accent">Sphere</span>
          </span>
        </Link>

        <div className={'absolute bg-white dark:bg-dark-bg w-full left-0 top-full mt-0 border-b border-grey dark:border-dark-card py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:show ' + (searchBoxVisibility ? "show" : "hide")}>
          <input
            type="text"
            placeholder='Search'
            className='w-full md:w-auto bg-grey dark:bg-dark-card dark:text-text-light p-4 pl-6 pr-[12%] rounded-full placeholder:text-dark-grey md:pl-14 transition-colors focus:ring-2 focus:ring-accent outline-none'
            onKeyDown={handleSearch}
          />

          <Search className='absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-dark-grey' />
        </div>

        <div className='flex items-center gap-6 md:gap-6 ml-auto'>
          <button className='md:hidden bg-grey dark:bg-dark-card dark:text-text-light w-12 h-12 rounded-full flex items-center justify-center'
            onClick={() => { setSearchBoxVisibility(currentVal => !currentVal) }}
          >
            <Search />
          </button>
          
          <button 
            className='w-12 h-12 rounded-full bg-grey dark:bg-dark-card flex items-center justify-center text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-colors'
            onClick={toggleTheme}
          >
            {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          <Link to="/about" className='hidden md:flex gap-2 link ml-4 mr-4 text-dark-grey dark:text-text-light hover:text-black dark:hover:text-white transition-colors font-medium'>
            <p>Developer</p>
          </Link>

          <Link to="/editor" className='hidden md:flex gap-2 link text-dark-grey dark:text-text-light hover:text-black dark:hover:text-white font-medium'>
            <NotebookPen />
            <p>Write</p>
          </Link>

          {
            access_token ?
              <>
                <Link to="/dashboard/notification" >
                  <button className='w-12 h-12 rounded-full bg-grey dark:bg-dark-card relative hover:bg-black/10 dark:hover:bg-white/10 transition-colors'>
                    <i className="ri-notification-2-line text-2xl mt-1 dark:text-text-light"></i>
                  </button>
                </Link>

                <div className='relative' onClick={handleUserNavPanel} onBlur={handleBlur}>
                  <button className='w-12 h-12 mt-1'>
                    <img src={profile_img} className='w-full h-full object-cover rounded-full border-2 border-transparent hover:border-accent transition-all' />
                  </button>

                  {
                    userNavPanel ? <UserNavigationPanel /> : ""
                  }
                </div>
              </>
              :
              <>
                <Link className='btn-dark py-2' to="/signin">
                  Sign In
                </Link>
                <Link className='btn-light py-2 hidden md:block dark:bg-dark-card dark:text-text-light dark:hover:bg-white/10' to="/signup">
                  Sign Up
                </Link>
              </>
          }

        </div>
      </nav>

      <Outlet />
    </>
  )
}

export default Navbar
