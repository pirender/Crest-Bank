import React from 'react'

const Service = () => {
    return (
        <div className='pt-10 lg:pt-[40px] lg:pb-[100px] pb-[28px] flex items-center' id='home'>
            <div className="mycontainer">
                <div className='px-4 flex-col gap-14 lg:gap-10 flex items-center lg:flex-row justify-center'>
                    <div className='lg:w-[45%] flex flex-col gap-5 lg:items-start'>
                        <p className='text-accent font-semibold text-[20px] lg:text-[24px]'>Better Experience</p>
                        <h2 className='text-primary text-[30px] hero-text font-bold lg:text-[35px] lg:leading-[4.2rem]'>Personalized Service that are mind-blowing</h2>
                        <p className='text-primary lg:text-left lg:text-[0.95rem] font-medium'>We understand that every customer is unique, which is why we take the time to listen and provide personalized financial advice. Whether you're a seasoned investor or a first-time homebuyer, our dedicated team is here to support you every step of the way.</p>

                    </div>
                    <div className='lg:w-[55%] flex flex-col gap-4'>
                        <div className='lg:flex-row flex flex-col items-center gap-3'>
                            <div className='group hover:bg-primary transition-all ease-in-out duration-[0.3s] flex flex-col gap-4 lg:w-[50%] items-center justify-center border-primary p-[17px] rounded-[18px] border-[1px] cursor-pointer'>
                                <div className='h-[50px] w-[50px] rounded-full group-hover:border-white group-hover:border-[1px] bg-primary flex items-center justify-center'>
                                    <img src="/ex1.png" alt="" className='h-[60%] ' />
                                </div>
                                <h3 className='text-primary text-center text-[15px] font-bold group-hover:text-white'>TData Protection -Security You Can Trust</h3>
                                <p className='text-center text-primary text-[14px] font-medium group-hover:text-white'>Your security is our top priority. With robust encryption protocols and stringent security measures in place, you can trust AlphaHeritage Bank to keep your financial information safe and secure.</p>
                            </div>
                            <div className='bg-primary flex flex-col gap-4 lg:w-[50%] items-center justify-center border-primary p-[17px] rounded-[18px] border-[1px] cursor-pointer'>
                                <div className='h-[50px] w-[50px] rounded-full border-white border-[1px] flex items-center justify-center'>
                                    <img src="/ex2.png" alt="" className='h-[60%] ' />
                                </div>
                                <h3 className='text-white text-center font-bold text-[15px]'>Team Collaboration - Community Focus</h3>
                                <p className='text-center text-white text-[14px] font-medium'>We believe in giving back to the communities we serve. Through various charitable initiatives and community outreach programs, AlphaHeritage Bank is dedicated to making a positive impact where it matters most.</p>
                            </div>
                        </div>
                        <div className='lg:flex-row flex flex-col items-center gap-3'>
                            <div className='flex flex-col gap-4 lg:w-[50%] items-center justify-center border-primary p-[17px] rounded-[18px] border-[1px] group hover:bg-primary transition-all ease-in-out duration-[0.3s] cursor-pointer'>
                                <div className='h-[50px] w-[50px] rounded-full bg-primary flex items-center justify-center group-hover:border-white group-hover:border-[1px]'>
                                    <img src="/ex3.png" alt="" className='h-[60%] ' />
                                </div>
                                <h3 className='text-primary text-center font-bold text-[15px] group-hover:text-white'>Transfer</h3>
                                <p className='text-center text-primary text-[14px] font-medium group-hover:text-white'>You can make transfer to any bank in the world, both local and international</p>
                            </div>
                            <div className='flex flex-col gap-4 lg:w-[50%] items-center justify-center border-primary p-[17px] rounded-[18px] border-[1px] group hover:bg-primary transition-all ease-in-out duration-[0.3s] cursor-pointer'>
                                <div className='h-[50px] w-[50px] rounded-full bg-primary flex items-center justify-center group-hover:border-white group-hover:border-[1px]'>
                                    <img src="/ex4.png" alt="" className='h-[60%] ' />
                                </div>
                                <h3 className='text-primary text-center font-bold text-[15px] group-hover:text-white'>Savings & Loan</h3>
                                <p className='text-center text-primary text-[14px] font-medium group-hover:text-white'>We have amazing savings plans as well as offer loans to our customers. Interestingly, you won't miss out of these.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service