import React from 'react'

const Money = () => {
  return (
    <div className='pt-10 lg:pt-[40px] lg:pb-[100px] pb-[28px] flex items-center' id='home'>
        <div className="mycontainer">
            <div className='px-4 flex-col gap-14 lg:gap-10 flex items-center lg:flex-row-reverse justify-center'>
                <div className='lg:flex-1 flex flex-col gap-5 lg:items-start'>
                    <p className='text-accent font-semibold text-[20px] lg:text-[24px]'>Money Back Guarantee!</p>
                    <h2 className='text-primary text-[30px] hero-text font-bold lg:text-[50px] lg:leading-[4.2rem]'>100% Risk Free</h2>
                    <p className='text-primary lg:text-left lg:text-[0.95rem] font-medium'>Don't worry! You are fully protected by our 100% No-Risk Money Back Guarantee. If you aren’t fully satisfied, simply cancel your request, and we won’t bill you. No questions asked.</p>
                    <a href="/login" className='mt-3'>
                        <button className='h-[2.5rem] font-semibold text-center rounded-[30px] w-[180px] bg-gradient-to-r from-primary to-secondary text-white  gap-3 uppercase flex items-center justify-center'>
                            Get Started
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='white'  className='w-[20px] h-[20px]'><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                        </button>
                    </a>
                </div>
                <div className='hidden lg:flex  lg:flex-1'>
                    <img src="/safe.png" alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Money