import React from 'react'

const Hero = () => {
  return (
    <section className='Landing-hero flex gap-4'>
      <div className='border border-amber-50 flex-1 px-1.5 py-1.5 text-white items-center'>
        <span className='border rounded-4xl border-[#F4A2B8] bg-[] text-[#F4A2B8] text-[15px] uppercase p-2 inline-flex '>Live on Production · xmentor.skramizraza.tech</span>
        <h1 class='hero-title text-[50px] font-bold'>
          The
          <span className='bg-linear-to-r from-[#FF758F] via-[#F4A2B8] to-[#FFB38A] bg-clip-text text-transparent'> Tactical </span>
          platform
          <br/>
          built for real classrooms
        </h1>
        <br />
        <span className='text-[21px] font-extralight'>XMentor is a full-stack EdTech platform used by 
        <span className='font-bold'> multiple </span> 
        <span className='font-bold' >teachers </span> 
        and 
        <span className='font-bold'> students </span> 
        daily. Assign exams, grade answers, resolve doubts, and track performance — all in one place.</span>
        <button className='inline-flex items-center justify-center gap-2 rounded-lg bg-[#FFA590] px-6 py-3 font-extrabold text-black cursor-pointer '>
          <span>⚡</span>
          <span>Get Started Free</span>
        </button>


      </div>

      <div className='border border-amber-50 flex-1 px-1.5 py-1.5'>right side</div>
    </section>
  )
}

export default Hero
