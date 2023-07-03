
import React from 'react';

import { MagnifyingGlassIcon, GlobeAmericasIcon, UserIcon, Bars3BottomRightIcon } from '@heroicons/react/24/solid';

function Header() {
  return (

        <header className=' bg-zinc-800 sticky top-0 z-50 flex justify-between shadow-lg py-5 px-5 md:px-8 gap-1'>

            {/* Logo  */}
            <div className='relative basis-1/6 items-center my-auto cursor-crosshair justify-between h-14'>                
                <p className='text-6xl font-bold text-stone-300'>HOME</p>
            </div>

            {/* Search Bar  */}
            <div className='flex py-2 gap-2 flex-1 ml-10'>
                <input
                    type='text'
                    placeholder='Search for what ever you need'
                    className='rounded-full flex-grow px-5 py-2 text-stone-200 bg-zinc-900/80 border-2 border-zinc-700 focus:ring-1 focus:ring-sky-400 focus:outline-none shadow-md'
                />
                <MagnifyingGlassIcon  className=' hidden md:inline-flex h-11 w-11 text-stone-500 rotate-90 bg-zinc-700 font-bold rounded-full cursor-pointer p-1' />
                
            </div>

            {/* Account Tab / */}
            <div className='flex items-center space-x-4 p-2 justify-end ml-10'>
                <p className='text-stone-300 font-bold text-lg cursor-pointer'>
                    Create an Account
                </p>
                <GlobeAmericasIcon className='h-10 w-10 text-stone-400 cursor-pointer' />
                <div className='flex items-center space-x-2 border-2 border-zinc-600 rounded-full p-2'>
                    <Bars3BottomRightIcon className='h-8 w-8 text-stone-500 cursor-pointer' />
                    <UserIcon className='h-8 w-8 text-stone-400 cursor-pointer' />                    
                </div>

            </div>

        </header>

  )
}

export default Header