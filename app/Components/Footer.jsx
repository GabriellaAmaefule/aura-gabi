import React from 'react'

const footer = () => {
  return (
    <div>
      <div className='space-y-5 rounded-3xl border border-white/10 bg-[#111821] p-6'>
        <p className='text-sm uppercase tracking-[0.25em] text-cyan-400'>CONTACT</p>
        <h4 className='mt-4 max-w-md text-5xl font-normal leading-tight text-white lg:text-6xl'>Start a project with us</h4>
        <p className='mt-6 max-w-md text-lg leading-relaxed text-slate-500'>Tell us what you`re creating and we`ll take it from there.</p>

        <div className='space-y-5 rounded-3xl border border-white/10 bg-[#111821] p-6'>
        <label htmlFor="Full name" className='mb-2 block text-lg text-slate-400'>Full name</label>
        <input type="text" required placeholder='Your name' className='w-full rounded-full border border-white/10 bg-white/5 px-6 py-6 text-lg text-white placeholder:text-slate-500 outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20' />
        </div>

       <div className='space-y-5 rounded-3xl border border-white/10 bg-[#111821] p-6'>
        <label htmlFor="Email" className='mb-2 block text-lg text-slate-400'>Email</label>
        <input type="text" required placeholder='you@email.com' className='w-full rounded-full border border-white/10 bg-white/5 px-6 py-4 text-lg text-white placeholder:text-slate-500 outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20' />
       </div>

        <div className='space-y-5 rounded-3xl border border-white/10 bg-[#111821] p-6'>
        <label htmlFor="Message"  className='mb-2 block text-lg text-slate-400'>Message</label>
        {/* <input type="text" required rows-5 placeholder='Tell us about your brand'className='w-full resize-none rounded-3xl border border-white/10 bg-white/5 px-6 py-4 text-lg text-white placeholder:text-slate-500 outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20' /> */}
        </div>
 

       <button className='w-full rounded-full bg-cyan-400 px-6 py-4 text-lg font-medium text-state-900 transition hover:bg-cyan-300 disabled:opacity-60'>Submit</button>
      </div>
      <footer className='border-t border-white/10 bg-gradient-to-b from-[#111821] rounder-3xl border gap-6 border-cyan-400'>
       <div>
        <h6 className='text-sm font-light uppercase tracking-[0.35em] text-white lg:text-sm px-6'>AURA STUDIO</h6>
        <p className='mt-4 text-sm text-slate-400lg:text-xl text-white px-6'>Bringing Ideals to Life</p>
      </div>
      <div className='flex item-end justify-between gap-12 lg:justify-end'>
        <p className='block text-sm text-white transition hover:text-white'>www.aurastudio.co @Aura Studio</p>
      </div>
      </footer>
      
    </div>
  )
}

export default footer
