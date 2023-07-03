import Image from 'next/image'
import Banner from '#/Banner.png'
import Navbar from '@/components/Navbar'
import TestHook from '@/hooks/testHook'

export default function Home() {
  return (
    <div className='bg-zinc-900'>
      <Navbar />
    <main className="flex min-h-screen flex-col items-center justify-start p-12">
      
      <Image src={Banner} alt="Digital Alchemyst Studios" width={1200} height={350} />
      <h4 className="text-lg font-bold text-center">
          Welcome to Next.js 13.4 Biolerplate + TypeScript 4.5 + Tailwind CSS 3.0 + Jest 27.2 + React Testing Library 12.1 + Cypress 9.5 + Storybook 6.3 + ESLint 8.1 + Prettier 2.5 + Husky 7.0 + Lint-Staged 11.2 + Commitlint 13.1 + Github Actions 5.1 + Node 16.13 Biolerplate by Digitl Alchemyst @ Digital Alchemyst Studios
      </h4>
      <button className='bg-zing-400 cursor-pointer border border-zinc-700 p-3 rounded-lg my-2'> Visit the Github </button>
      <TestHook />
      
    </main>
    </div>
  )
}
