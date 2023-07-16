import React from 'react';
import {
  MagnifyingGlassIcon,
  GlobeAmericasIcon,
  UserIcon,
  Bars3BottomRightIcon,
} from '@heroicons/react/24/solid';

const Navbar: React.FC = (): JSX.Element => {
  return (
    <header className='sticky top-0 z-50 flex justify-between gap-1 bg-zinc-800 px-5 py-5 shadow-lg md:px-8'>
      {/* Logo */}
      <div className='relative my-auto h-14 basis-1/6 cursor-crosshair items-center justify-between'>
        <p className='text-6xl font-bold text-stone-300'>HOME</p>
      </div>

      {/* Search Bar */}
      <div className='ml-10 flex flex-1 gap-2 py-2'>
        <input
          type='text'
          placeholder='Search for whatever you need'
          className='flex-grow rounded-full border-2 border-zinc-700 bg-zinc-900/80 px-5 py-2 text-stone-200 shadow-md focus:outline-none focus:ring-1 focus:ring-sky-400'
        />
        <MagnifyingGlassIcon className='hidden h-11 w-11 rotate-90 cursor-pointer rounded-full bg-zinc-700 p-1 font-bold text-stone-500 md:inline-flex' />
      </div>

      {/* Account Tab */}
      <div className='ml-10 flex items-center justify-end space-x-4 p-2'>
        <p className='cursor-pointer text-lg font-bold text-stone-300'>
          Create an Account
        </p>
        <GlobeAmericasIcon className='h-10 w-10 cursor-pointer text-stone-400' />
        <div className='flex items-center space-x-2 rounded-full border-2 border-zinc-600 p-2'>
          <Bars3BottomRightIcon className='h-8 w-8 cursor-pointer text-stone-500' />
          <UserIcon className='h-8 w-8 cursor-pointer text-stone-400' />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
