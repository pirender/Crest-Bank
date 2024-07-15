/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Hero = () => {
  return (
    <div className='pt-32 lg:pt-[170px] lg:pb-[100px] pb-[128px] flex items-center' id='home'>
        <div className="mycontainer">
            <div className='px-4 flex-col gap-14 lg:gap-0 lg:flex-row flex items-center justify-center'>
                <div className='lg:flex-1 flex flex-col gap-5 items-center lg:items-start'>
                    <p className='text-accent font-semibold text-[20px] lg:text-[24px]'>Best Online Bank</p>
                    <h2 className='text-white text-[30px] hero-text font-bold lg:text-[60px] lg:leading-[4.2rem]'>Crest Bank</h2>
                    <p className='text-white text-center lg:text-left lg:text-[1.3rem]'>We’re committed to your personal & financial wellness, as well as supporting our community during this time..</p>
                    <a href="/login">
                        <button className='h-[2.5rem] text-center rounded-[30px] w-[180px] bg-gradient-to-r from-secondary uppercase to-primary text-white border-0'>
                           Get Started
                        </button>
                    </a>
                </div>
                <div className='hidden lg:block  lg:flex-1'>
                    <img src="/banner-15.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero