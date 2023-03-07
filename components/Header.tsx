"use client";

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'
import {FormEvent, useRef} from 'react';

function Header() {
  const inputRef = React.useRef<HTMLInputElement>(null)
  React.useEffect(() => {
    inputRef.current?.focus() // focus on input when page loads
  }, [])
  
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = inputRef.current?.value;
      console.log(input);
      if (!input) return;
      if (inputRef.current?.value){
        inputRef.current.value = ''
      } // don't search for less than 3 characters

          try{
            // call our api to activate the scraper...
            fetch('http://localhost:3000/api/scraper', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ input }),
            })
          }catch(error){
            console.log(error);
          }
          //wait for the scraper to finish...
  }
  


  return (
    <header>
      <form className='flex items-center space-x-2 justify-center rounded-full py-2 px-4 bg-indigo-100 max-w-md mx-auto'
      onSubmit={handleSearch}
      >
        <input 
          ref={inputRef}
        type="text"
         placeholder="Search..." 
         className='flex-1 outline-none bg-transparent text-indigo-400 placeholder:text-indigo-400'
         
         />
        <button hidden type="submit">Search</button>
        <MagnifyingGlassIcon className='h-6 w-6 text-indigo-300' />

      </form>
    </header>
  )
}

export default Header
