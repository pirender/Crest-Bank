import React from 'react'

const Help = () => {
  return (
    <div className='pt-10 lg:pt-[40px] lg:pb-[100px] pb-[28px] flex items-center'>
        <div className="mycontainer">
            <div className='px-4 flex-col gap-14 flex'>
                <div className='flex flex-col gap-5 items-center'>
                    <p className='text-accent font-semibold text-[20px] lg:text-[24px]'>Stop wasting time</p>
                    <h2 className='text-center text-primary text-[30px] hero-text font-bold lg:text-[50px] lg:leading-[4.2rem]'>Need Some Help?</h2>
                    <p className='text-primary text-center lg:text-left lg:text-[0.95rem] font-medium'>Whether you’re stuck or just want some tips on where to start, any problem,hit up our experts anytime.</p>
                </div>
                <div className='flex flex-col lg:gap-7 lg:flex-row items-center'>
                    <div className='lg:flex-1 hidden lg:block'>
                    <img src="/help.png" alt=""/>
                    </div>

                    <div className='flex lg:flex-1 flex-col gap-4'>
                        <div className='py-[30px] px-[15px] shadow-xl flex items-center gap-4 rounded-[10px] bg-white'>
                            <div>
                                <img src="/help1.png" alt="" className='h-[20%]'/>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h5 className='text-primary font-bold text-[20px] lg:text-[24px]'>live chat</h5>
                                <p className='text-primary font-medium text-[16px] lg:text-[18px]'>Anything I can help you with?</p>
                            </div>
                        </div>
                        <div className='py-[30px] px-[15px] shadow-xl flex items-center gap-4 rounded-[10px] bg-white'>
                            <div>
                                <img src="/help2.png" alt="" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h5 className='text-primary font-bold text-[20px] lg:text-[24px]'>Send Ticket</h5>
                                <p className='text-primary font-medium text-[16px] lg:text-[18px]'>Anything I can help you with?</p>
                            </div>
                        </div>
                        <div className='py-[30px] px-[15px] shadow-xl flex items-center gap-4 rounded-[10px] bg-white'>
                            <div>
                                <img src="/help2.png" alt="" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h5 className='text-primary font-bold text-[20px] lg:text-[24px]'>Explore FAQs</h5>
                                <a href='' className='text-accent font-medium text-[16px] lg:text-[18px]'>Go to FAQs page</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Help