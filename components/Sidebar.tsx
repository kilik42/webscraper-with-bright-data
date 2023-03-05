import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'

function Sidebar() {
  return (
    <div className='p-2 md:p-10 py-6 overflow-y-auto border-b border-indigo-500/50'>
        <div className='flex flex-col items-center justify-center mb-10'>
        <DocumentMagnifyingGlassIcon className="h-64, w-64 text-indigo-600/20" />
        
        <h1 className='hidden md:inline text-center  text-3xl mt-2 mb-2 font-bold'>web scraper</h1>
        <h2 className='hidden md:inline text-center text-xs italic'>we are using the databright api</h2>
        </div>
        <ul>
            {/* sidebar rows */}
            <li></li>
            <li></li>
            <li></li>
        </ul>
      
    </div>
  )
}

export default Sidebar
