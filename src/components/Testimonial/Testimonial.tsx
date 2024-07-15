import React from 'react'

const Testimonial = () => {
    return (
        <div className='pt-10 lg:pt-[40px] lg:pb-[100px] pb-[28px] bg-[#0c2243] flex items-center'>
            <div className="mycontainer">
                <div className='px-4 flex-col gap-14 lg:gap-10 flex'>
                    <div className='flex flex-col gap-5'>
                        <p className='text-accent text-[20px] lg:text-[24px] font-semibold text-center'>Testimonials</p>
                        <h2 className='text-white text-[20px] text-center font-bold lg:text-[50px] lg:leading-[4.2rem]'>Don't take our word for it.</h2>
                        <h2 className='text-white text-[20px] text-center font-bold lg:text-[50px] lg:leading-[4.2rem]'>Trust our custormers</h2>

                    </div>




                    <div className='lg:flex-row flex flex-col gap-3 flex-wrap lg:justify-center'>
                        <div className=''>
                            <div className='bg-[#e2ebf7] lg:w-[300px] p-4 rounded-[10px] flex flex-col gap-3'>
                                <div className='flex gap-4'>
                                    <div className='h-[50px] w-[50px] rounded-full border-[3px] border-primary'>
                                        <img src="https://randomuser.me/api/portraits/men/74.jpg" alt="" className='h-full w-full object-contain rounded-full' />
                                    </div>

                                    <div>
                                        <h5 className='text-primary font-bold'>Jurgeni</h5>
                                        <p className='text-accent font-medium'>@monstermash</p>
                                    </div>
                                </div>

                                <div><p className='text-text'>The support staff <span className='text-accent font-semibold'>@crest</span> is absolutely fantastic. Only nice things to say about them - and good support goes a long way as most of us will have painful first hand experience with.</p></div>

                                <div>
                                    <div className='flex items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#004080" className=' w-[20px]'><path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#004080" className=' w-[20px]'><path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#004080" className=' w-[20px]'><path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#004080" className=' w-[20px]'><path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path></svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#004080" className='w-[20px]'><path d="M12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502V15.968ZM12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className='bg-[#e2ebf7] p-4 lg:w-[300px] rounded-[10px] flex flex-col gap-3'>
                                <div className='flex gap-4'>
                                    <div className='h-[50px] w-[50px] rounded-full border-[3px] border-primary'>
                                        <img src="https://randomuser.me/api/portraits/women/74.jpg" alt="" className='h-full w-full object-contain rounded-full' />
                                    </div>

                                    <div>
                                        <h5 className='text-primary font-bold'>Sarah Johnson</h5>
                                        <p className='text-accent font-medium'>@sarah</p>
                                    </div>
                                </div>

                                <div><p className='text-text'>I've been banking with Crest Bank for over five years, and their customer service is exceptional. The staff is always friendly and ready to assist with any queries.</p></div>

                                <div>
                                    <div className='flex items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#004080" className=' w-[20px]'><path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#004080" className=' w-[20px]'><path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#004080" className=' w-[20px]'><path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#004080" className=' w-[20px]'><path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path></svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#004080" className='w-[20px]'><path d="M12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502V15.968ZM12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                                    </div>
                                </div>                            </div>
                        </div>
                        <div className=''>
                            <div className='bg-[#e2ebf7] p-4 rounded-[10px] flex flex-col gap-3 lg:w-[300px]'>
                                <div className='flex gap-4'>
                                    <div className='h-[50px] w-[50px] rounded-full border-[3px] border-primary'>
                                        <img src="https://randomuser.me/api/portraits/men/70.jpg" alt="" className='h-full w-full object-contain rounded-full' />
                                    </div>

                                    <div>
                                        <h5 className='text-primary font-bold'>Michael Smith</h5>
                                        <p className='text-accent font-medium'>@smith</p>
                                    </div>
                                </div>

                                <div><p className='text-text'>Crest Bank has been a game-changer for my business. Their tailored financial solutions and expert advice have helped me grow my business exponentially.</p></div>

                                <div>
                                    <div className='flex items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#004080" className=' w-[20px]'><path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#004080" className=' w-[20px]'><path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#004080" className=' w-[20px]'><path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#004080" className=' w-[20px]'><path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path></svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#004080" className='w-[20px]'><path d="M12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502V15.968ZM12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                                    </div>
                                </div>                            </div>
                        </div>
                        <div className=''>
                            <div className='bg-[#e2ebf7] p-4 rounded-[10px] flex flex-col gap-3 lg:w-[300px]'>
                                <div className='flex gap-4'>
                                    <div className='h-[50px] w-[50px] rounded-full border-[3px] border-primary'>
                                        <img src="https://randomuser.me/api/portraits/women/64.jpg" alt="" className='h-full w-full object-contain rounded-full' />
                                    </div>

                                    <div>
                                        <h5 className='text-primary font-bold'>Emily Davis</h5>
                                        <p className='text-accent font-medium'>@emily</p>
                                    </div>
                                </div>

                                <div><p className='text-text'>I recently switched to Crest Bank, and the transition was seamless. The team took care of everything, from transferring my accounts to setting up new services. I feel confident and secure banking with Teclevs Bank.</p></div>

                                <div>
                                    <div className='flex items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#004080" className=' w-[20px]'><path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#004080" className=' w-[20px]'><path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#004080" className=' w-[20px]'><path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#004080" className=' w-[20px]'><path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path></svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#004080" className='w-[20px]'><path d="M12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502V15.968ZM12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                                    </div>
                                </div>                            </div>
                        </div>
                        <div className=''>
                            <div className='bg-[#e2ebf7] p-4 rounded-[10px] flex flex-col gap-3 lg:w-[300px]'>
                                <div className='flex gap-4'>
                                    <div className='h-[50px] w-[50px] rounded-full border-[3px] border-primary'>
                                        <img src="https://randomuser.me/api/portraits/men/50.jpg" alt="" className='h-full w-full object-contain rounded-full' />
                                    </div>

                                    <div>
                                        <h5 className='text-primary font-bold'>John Anderson</h5>
                                        <p className='text-accent font-medium'>@andy</p>
                                    </div>
                                </div>

                                <div><p className='text-text'>Teclevs Bank offers the best savings plans and investment options I've come across. Their financial advisors are knowledgeable and always provide sound advice tailored to my financial goals.</p></div>

                                <div>
                                    <div className='flex items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#004080" className=' w-[20px]'><path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#004080" className=' w-[20px]'><path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#004080" className=' w-[20px]'><path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#004080" className=' w-[20px]'><path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path></svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#004080" className='w-[20px]'><path d="M12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502V15.968ZM12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                                    </div>
                                </div>                            </div>
                        </div>
                        <div className=''>
                            <div className='bg-[#e2ebf7] p-4 rounded-[10px] flex flex-col gap-3 lg:w-[300px]'>
                                <div className='flex gap-4'>
                                    <div className='h-[50px] w-[50px] rounded-full border-[3px] border-primary'>
                                        <img src="https://randomuser.me/api/portraits/women/30.jpg" alt="" className='h-full w-full object-contain rounded-full' />
                                    </div>

                                    <div>
                                        <h5 className='text-primary font-bold'>Jessica Brown</h5>
                                        <p className='text-accent font-medium'>@jessie</p>
                                    </div>
                                </div>

                                <div><p className='text-text'>Teclevs Bank has been my go-to bank for all my financial needs. From personal banking to mortgage services, they have always provided top-notch support.</p></div>

                                <div>
                                    <div className='flex items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#004080" className=' w-[20px]'><path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#004080" className=' w-[20px]'><path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#004080" className=' w-[20px]'><path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#004080" className=' w-[20px]'><path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path></svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#004080" className='w-[20px]'><path d="M12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502V15.968ZM12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                                    </div>
                                </div>                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Testimonial