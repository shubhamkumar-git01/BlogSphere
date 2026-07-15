import React from 'react'
import { motion } from 'framer-motion'
import { FolderOpen } from 'lucide-react'

const NoDataMessage = ({message}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2, z: 20 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className='flex flex-col items-center justify-center w-full p-10 rounded-3xl bg-grey dark:bg-dark-card/40 dark:text-white mt-8 mb-4 transition-all duration-300 shadow-md hover:shadow-xl dark:shadow-black/20 border border-transparent dark:border-white/5 perspective-1000 transform-style-3d text-center cursor-default'
    >
      <div className="w-16 h-16 bg-white dark:bg-dark-bg rounded-full flex items-center justify-center mb-5 shadow-sm text-purple dark:text-accent group-hover:scale-110 transition-transform">
        <FolderOpen size={32} strokeWidth={1.5} />
      </div>
      <p className="text-xl font-bold mb-3 tracking-wide">{message}</p>
      <div className="flex items-center gap-2 text-dark-grey dark:text-text-light/60 italic text-sm">
        <span className="w-6 h-px bg-current"></span>
        <p>"A blank canvas holds infinite possibilities."</p>
        <span className="w-6 h-px bg-current"></span>
      </div>
    </motion.div>
  )
}

export default NoDataMessage
