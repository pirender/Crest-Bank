import React from 'react'
import Counter from './Counter'

const AboutOne = () => {
    return (
        <div className='pt-10 lg:pt-[40px] lg:pb-[100px] pb-[28px] flex items-center' id='home'>
            <div className="mycontainer">
                <div className='px-4 flex-col gap-14 lg:gap-10 flex items-center lg:flex-row-reverse justify-center'>
                    <div className='lg:flex-1 flex flex-col gap-14'>
                        <div className='flex flex-col gap-5 lg:items-start'>
                            <p className='text-accent font-semibold text-[17px] sm:text-[20px] lg:text-[24px]'>A Few Words About Crest Bank</p>
                            <h2 className='text-primary text-[30px] hero-text font-bold lg:text-[50px] lg:leading-[4.2rem]'>Who we are.</h2>
                            <p className='text-primary lg:text-left lg:text-[0.95rem] leading-7 font-medium'>Crest Bank: Secure, Reliable, Efficient At Crest Bank, we pride ourselves on being the quick brown fox in the financial world, effortlessly jumping over any obstacles to provide exceptional service to our customers. Just like the timeless tale of the quick brown fox jumping over the lazy dog, we continuously strive to exceed expectations and deliver top-notch banking solutions. With our robust online banking platform, you can manage your finances with ease, whether you're on the go or relaxing at home. From transferring funds to paying bills, Crest Bank offers a seamless and convenient banking experience. Our commitment to security ensures that your financial information is safeguarded at all times. Rest assured that your transactions are protected by advanced encryption technology, giving you peace of mind every step of the way. Experience the agility and reliability of Crest Bank today. Join us as we leap towards a brighter financial future together.</p>
                        </div>

                        <div className='flex flex-col lg:flex-row lg:items-center gap-3'>
                            <div className='flex items-center gap-3'>
                                <div className='flex-[1]'>
                                    <img src="/counter1.png" alt="" />
                                </div>

                                <div className='flex sm:flex-[3] flex-[2] lg:flex-[2] flex-col gap-1'>
                                    <Counter end={45} suffix="k" />

                                    <h4 className='text-primary font-medium'>Total User</h4>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='flex-[1]'>
                                    <img src="/counter2.png" alt="" />
                                </div>

                                <div className='flex sm:flex-[3] flex-[2] lg:flex-[2] flex-col gap-1'>
                                    <Counter end={90} suffix="+" />

                                    <h4 className='text-primary font-medium'>Countries</h4>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='flex-[1]'>
                                    <img src="/counter3.png" alt="" />
                                </div>

                                <div className='flex sm:flex-[3] flex-[2] lg:flex-[2] flex-col gap-1'>
                                    <Counter end={95} suffix="%" />

                                    <h4 className='text-primary font-medium'>Satisfaction</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hidden lg:flex  lg:flex-1'>
                        <img src="/about.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutOne