import React from 'react'

const Nav = () => {
  return (
    <div className='bg-[#030a10]/80 backdrop-blur flex items-center justify-between px-5 py-6'>
    <h2 className='text-xl font-light uppercase tracking-[0.35em] text-white'>AURA STUDIO</h2> 
    
    <div className='flex items-center gap-5 text-lg text-slate-400'>
    <h5 className='transition hover:text-white'>Home</h5>
    <h5 className='transition hover:text-white'>About</h5>
    <h5 className='transition hover:text-white'>Contact</h5>
    </div>

    </div>
  )
}
export default Nav
