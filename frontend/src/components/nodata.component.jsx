import React from 'react'

const NoDataMessage = ({message}) => {
  return (
    <div className='text-center w-full p-4 rounded-full bg-grey/50 dark:bg-dark-card/50 dark:text-white mt-4 transition-colors'>
      <p>{message}</p>
    </div>
  )
}

export default NoDataMessage
