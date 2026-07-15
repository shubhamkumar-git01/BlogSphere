import React, { useRef } from 'react'
import { useState, useEffect, act } from "react";

export let activeTabLineRef
export let activeTabRef

const InPageNavigation = ({ routes,defaultHidden = [] ,defaultActiveIndex = 0,children }) => {

  activeTabLineRef = useRef()
  activeTabRef = useRef()

  let [inPageNavIndex, setInPageNavIndex] = useState(defaultActiveIndex)

  const changePageState = (btn, i) => {
    let {offsetWidth, offsetLeft} = btn

    activeTabLineRef.current.style.width = offsetWidth + "px"
    activeTabLineRef.current.style.left = offsetLeft + "px"

    setInPageNavIndex(i)
  }

  useEffect(() => {
    changePageState(activeTabRef.current, defaultActiveIndex)
  },[])


  return (
    <>
      <div className='relative mb-8 bg-white dark:bg-dark-bg border-b border-grey dark:border-dark-grey flex flex-nowrap overflow-x-auto transition-colors duration-300'>
        {
          routes.map((route, i) => {
            return (
              <button
                ref={i == defaultActiveIndex ? activeTabRef: null }
                key={i}
                className={"p-4 px-5 capitalize transition-all duration-300 hover:bg-grey/50 dark:hover:bg-dark-card/30 rounded-t-xl " + (inPageNavIndex == i ? "text-black dark:text-white font-bold" : "text-dark-grey dark:text-text-light/60 font-medium ") + (defaultHidden .includes(route) ? "md:hidden ":" ")}
                onClick={(e)=>{changePageState(e.target, i)}}
              >
              {route}
              </button>
            )
          })
        }

        <hr ref={ activeTabLineRef} className='absolute bottom-0 border-purple dark:border-accent border-2 rounded-t-md transition-all duration-300 ease-out' />


      </div>

      {Array.isArray(children) ? children[inPageNavIndex] : children}


    </>
  )
}

export default InPageNavigation
