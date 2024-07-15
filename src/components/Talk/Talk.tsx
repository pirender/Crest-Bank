import React from 'react'

const Talk = () => {
  return (
    <div className='pt-10 lg:pt-[40px] lg:pb-[100px] pb-[28px] flex items-center' id='home'>
        <div className="mycontainer">
            <div className='px-4 flex-col gap-14 lg:gap-10 flex items-center lg:flex-row-reverse justify-center'>
                <div className='lg:flex-1 flex flex-col gap-5 lg:items-start'>
                    <p className='text-accent font-semibold text-[20px] lg:text-[24px]'>Trusted Legacy</p>
                    <h2 className='text-primary text-[30px] hero-text font-bold lg:text-[50px] lg:leading-[4.2rem]'>We work our talk</h2>
                    <p className='text-primary lg:text-left lg:text-[0.95rem] font-medium'>With a heritage rooted in reliability and trust, Crest Bank has been a pillar of the community for decades. Our longstanding reputation speaks volumes about our commitment to excellence and customer satisfaction.</p>
                </div>
                <div className='lg:flex  lg:flex-1 justify-end'>
                    <img src="/digit2.png" alt="" className='lg:w-[95%]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Talk