import React from 'react'

const Innovative = () => {
  return (
    <div className='pt-10 lg:pt-[40px] lg:pb-[100px] pb-[28px] flex items-center' id='home'>
        <div className="mycontainer">
            <div className='px-4 flex-col gap-14 lg:gap-10 flex items-center lg:flex-row justify-center'>
                <div className='lg:flex-1 flex flex-col gap-5 lg:items-start'>
                    <p className='text-accent font-semibold text-[20px] lg:text-[24px]'>Innovative Solutions</p>
                    <h2 className='text-primary text-[30px] hero-text font-bold lg:text-[45px] lg:leading-[4.2rem]'>Experience incredible solutions just for you</h2>
                    <p className='text-primary lg:text-left lg:text-[0.95rem] font-medium'>At Crest Bank, we embrace the latest technologies to bring you innovative banking solutions tailored to your needs. From cutting-edge online banking platforms to intuitive mobile apps, we make managing your finances easy and convenient.</p>
                    
                </div>
                <div className='lg:flex  lg:flex-1 justify-end'>
                    <img src="/digit.png" alt="" className='lg:w-[95%]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Innovative