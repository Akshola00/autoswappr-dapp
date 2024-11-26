import React from 'react'
import Footer from '../components/footer'
import Swapper from '../components/swapper'

export default function page() {
  return (
    <div>
      <div className="flex  flex-col items-center text-center pt-[70px]">
        <h1 className="max-w-[700px] text-[28px] font-semibold text-[#F7F7F7] mb-2">
          Autoswappr DEX
        </h1>
        <p className='text-center text-[#A199B8]'>Please select a token to swap from/ to and how much you want to swap.</p>
        <div className='pt-10' />
        <Swapper />
      </div>
      <Footer />
    </div>
  )
}
