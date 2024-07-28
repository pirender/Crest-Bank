'use client'
import React from 'react'
import useSWR from 'swr';
import { formatNumber, formatDate } from '../../lib/util';


const fetcher = (url: string) => fetch(url).then((res) => res.json());


const SavingsForm = () => {
    const { data: user } = useSWR("/api/get-user", fetcher);

    return (
        <div className='py-4 md:pb-24 lg:pb-6 pb-[600px]'>
            <div className="mycontainer">
                <div className="px-4">
                    <div className=''>
                        <div className='bg-white rounded-lg flex flex-col gap-4 p-4 md:max-w-md md:my-0 md:mx-auto'>
                            <div>
                                <p>New Savings</p>
                            </div>

                            <form action="" className='flex flex-col gap-5'>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-gray-400 text-[13px] md:text-[16px]'>Amount Savings Plan</p>

                                    <select name="" id="" className='w-full p-2 rounded-md border-[1px] border-gray-400 bg-transparent'>
                                        <option value="" defaultChecked>Select Savings Plan</option>
                                        <option value="">$1000 (ROI 7%)</option>
                                        <option value="">$2500 (ROI 32%)</option>
                                        <option value="">$10000 (ROI 43%)</option>
                                        <option value="">$50000 (ROI 65%)</option>
                                    </select>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-gray-400 text-[13px] md:text-[16px]'>Settlement Account</p>

                                    <select name="" id="" className='w-full p-2 rounded-md border-[1px] border-gray-400 bg-transparent'>
                                        <option value="" defaultChecked>Select Settlement Account</option>
                                        <option value="">({user?.savings_account}) Savings: {user?.balance_savings}</option>
                                        <option value="">({user?.current_account}) Current: {user?.balance_current}</option>
                                        
                                    </select>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-gray-400 text-[13px] md:text-[16px]'>Savings Type</p>

                                    <select name="" id="" className='w-full p-2 rounded-md border-[1px] border-gray-400 bg-transparent'>
                                        <option value="" defaultChecked>Select Savings Type</option>
                                        <option value="">Business Savings</option>
                                        <option value="">Individual Savings</option>
                                        <option value="">Student Savings</option>
                                    </select>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-gray-400 text-[13px] md:text-[16px]'>Savings Duration</p>

                                    <select name="" id="" className='w-full p-2 rounded-md border-[1px] border-gray-400 bg-transparent'>
                                        <option value="" defaultChecked>Select Savings Duration</option>
                                        <option value="">7 Days (1.5% interest)</option>
                                        <option value="">2 Weeks (3% interest)</option>
                                        <option value="">1 Month (5% interest)</option>
                                        <option value="">3 Days (7% interest)</option>
                                        <option value="">A Year (10% interest)</option>
                                    </select>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-gray-400 text-[13px] md:text-[16px]'>Account password</p>

                                    <input type="text" name="" id="" placeholder='*****' className='p-2 rounded-md placeholder:text-gray-400 placeholder:text-[13px] focus:outline-none border-[1px] border-gray-400' />
                                </div>

                                <div>
                                    <button type="submit" className='text-[13px] text-white bg-primary p-[10px] rounded-md'>
                                       Save Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SavingsForm