import React from 'react'

const Choose = () => {
  return (
    <div className='pt-10 lg:pt-[40px] lg:pb-[100px] pb-[28px] flex items-center' id='home'>
        <div className="mycontainer">
            <div className='px-4 flex-col gap-14 lg:gap-0 lg:flex-row flex items-center justify-center'>
                <div className='lg:flex-1 flex flex-col gap-5 lg:items-start'>
                    <p className='text-accent font-semibold text-[20px] lg:text-[24px]'>Why Choose Us</p>
                    <h2 className='text-primary text-[30px] hero-text font-bold lg:text-[50px] lg:leading-[4.2rem]'>We make your financial needs possible when you come to us</h2>
                    <p className='text-primary lg:text-left lg:text-[0.95rem] font-medium'>Choose Crest Bank for a banking experience that combines tradition with innovation, reliability with flexibility, and security with personalized service. Join us on the journey towards financial success and peace of mind.</p>
                    <a href="/login" className='mt-4'>
                        <button className='h-[2.5rem] font-semibold text-center rounded-[30px] w-[190px] text-primary border-[1px] border-primary gap-3 flex items-center justify-center'>
                            Get Started 

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='#004080'  className='w-[20px] h-[20px]'><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                        </button>
                    </a>
                </div>
                <div className='lg:flex lg:flex-1 lg:justify-end'>
                    <img src="/wallet.png" alt="" className='lg:w-[95%]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Choose