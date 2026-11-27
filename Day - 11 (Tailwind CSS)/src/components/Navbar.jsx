import React from 'react'

const navbar = () => {
  return (
    <header className='Navbar border-b top-0 sticky w-full border-rose-200/20 bg-[#1B1325]'>
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-4'>
        <a href="#" className='flex items-center text-xl font-extrabold tracking-tight'>  
          <span className='text-rose-300'>X</span>
          <span className='text-stone-100'>Mentor</span>
        </a>

      <nav className='md:flex items-center gap-8 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#C8B6D6]/75'>
        <a href="" className='transition-colors hover:text-[#F5EFEA]'>features</a>
        <a href="" className='transition-colors hover:text-[#F5EFEA]'>how it works</a>
        <a href="" className='transition-colors hover:text-[#F5EFEA]'>tech</a>
      </nav>

      <div className='flex items-center gap-4'>
        <button className=' border border-[#E8B4A2]/35 rounded-lg bg-[#2B1E3B]/60 px-4 py-1.5 text-sm font-medium transition-colors hover:border-[#F3B093]/70 text-[#F5EFEA] cursor-pointer'>Sign in</button>
        <button className='flex items-center gap-1.5 rounded-lg border border-[#F3B093]/40 bg-[#D8829D] px-4 py-1.5 text-sm font-semibold text-[#1B1325] shadow-[0_0_20px_rgba(243,176,147,0.15)] transition hover:bg-[#F3B093] cursor-pointer'>
        Get Started ➜
        </button>
      </div>
      </div>
    </header>
  )
}

export default navbar

