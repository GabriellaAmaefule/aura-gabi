import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className='rounded-2xl border border-white/10 bg-gradient-to-br from-teal-900/30 via-[#0a1119] to-indigo-900/30 p-6'>
      <h5 className='text-sm uppercase tracking-[0.25em] text-cyan-400'>LONDON CREATIVE AGENCY</h5>
      <h2 className='mt-4 text-6xl font-normal text-white'>Aura Studio</h2>
      <h5 className='mt-4 text-3xl font-light text-slate-300'>Bringing Ideas to Life.</h5>
      <p className='mt-5 text-lg leading-relaxed text-slate-400'>We help brands express their identity through mondern,<br /> minimalist design considered, purposefil, and quietly confident.</p>
      <div className='mt-8 flex flex-rows gap-3'>
        <button className='rounded-full border border-cyan-300/30 bg-cyan-400 px-6 py-4 text-center text-lg font-medium text-slate-900 transition hover:bg-cyan-300'>Let`s Work Together</button>
      <button className='rounded-full border border-white/30 bg-white/5 px-6 py-4 text-center text-lg text-white transition  hover:bg-white/10'>Explore Services</button>
      </div>
      </div>
  <div className=' rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur'>
  <h5 className='text-sm font-light uppercase tracking-[0.3em] text-cyan-400'>ABOUT</h5>
  <p className='mt-6 text-xl leading-10 text-slate-400'>Aura studio is a london-based creative agency focused on helping brands communicate their identity through clean aesthetics, strong visuals, and purposeful storytelling.</p>
  
  
 <div className='grid grid-cols-2 gap-4  p-4'>
   <div className='flex min-h-[180px] flex-col justify-between rounded-3xl brorder border-white/10 bg-[#111821] p-6'>
    <h5 className='text-sm uppercase tracking-[0.25em] text-cyan-400'>BASED IN</h5>
    <p className='text-lg leading-relaxed text-slate-400'>London, creating with a global point of view</p>
  </div>

  <div className='flex min-h-[180px] flex-col justify-between rounded-3xl brorder border-white/10 bg-[#111821] p-6' >
    <h5 className='text-sm uppercase tracking-[0.25em] text-cyan-400'>DISCIPLINE</h5>
    <p className='text-lg leading-relaxed text-slate-400 '>Brand, product, and web designed as one continuous story.</p>
  </div>
 </div>
  
  <div className='grid grid-cols-3 gap-4  p-4'>
  <div className='grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 lg:gap-6 py-4'>
  <div className='flex min-w-[380px] flex-col justify-between rounded-3xl border border-white/10 bg-[#111821] hover:bg-white/10 p-6'>
   <p className='text-sm tracking-[0.25em] text-cyan-400'>01</p>
  <h5 className='text-2xl font-medium text-white lg:text-3xl'>Branding</h5>
  <p className='mt-3 text-lg leading-relaxed text-slate-400'>Building memorable and purposeful <br /> brand identities.</p>
 </div>

</div>
<div className='grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 lg:gap-6 py-4'>
  <div className='flex min-w-[380px] flex-col justify-between rounded-3xl border border-white/10 bg-[#111821] hover:bg-white/10 p-6'>
  <p className='text-sm tracking-[0.25em] text-cyan-400'>02</p>
  <h5 className='text-2xl font-medium text-white lg:text-3xl'>UI/UX DESIGN</h5>
  <p className='mt-3 text-lg leading-relaxed text-slate-400'>Creating intuitive and engaging digital <br />experiences.</p>
</div>
</div>

  <div className='grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 lg:gap-6 py-4'>
  <div className='flex min-w-[380px] flex-col justify-between rounded-3xl border border-white/10 bg-[#111821] hover:bg-white/10 p-6'>  <p className='text-sm tracking-[0.25em] text-cyan-400'>03</p>
  <h5 className='text-2xl font-medium text-white lg:text-3xl'>Web Design</h5>
  <p className='mt-3 text-lg leading-relaxed text-slate-400'>Designing modern, responsive, and <br />visually compelling websites.</p>
</div>
</div>

 </div>
 </div>
    </div>    
  )
}

export default Hero
