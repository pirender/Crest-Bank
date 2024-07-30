'use client'
import React, { useState, useEffect } from 'react'
import useSWR from 'swr';
import { formatNumber, formatDate } from '../../lib/util';


const fetcher = (url: string) => fetch(url).then((res) => res.json());


const Card = () => {
    const { data } = useSWR("/api/get-user", fetcher);
    const [activate, setActivate] = useState(false)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        if (data) {
            setLoading(false)
        }
    }, [data]);

    return (
        <div className='py-4 md:pb-24'>
            <div className="mycontainer">
                <div className="px-4">
                    <div>
                        <dialog id="loading-modal" className={`modal bg-[#004080] ${loading ? 'opacity-100' : ''}`}>
                            <div className='flex items-center justify-center gap-3'>
                                <span className="loading loading-ring loading-lg bg-white"></span>
                            </div>
                        </dialog>
                        <div className='flex flex-col gap-3 md:flex-row'>
                            <div className='bg-gradient-to-r from-primary to-secondary p-3 flex flex-col gap-16 rounded-lg md:flex-[1]'>
                                <div className='flex items-center justify-between'>
                                    <div className='h-[40px] w-[50px] bg-gray-900 rounded-md'>

                                    </div>

                                    <p className=' text-white'>Credit Card</p>
                                </div>

                                <div>
                                    <p className='text-[13px] text-white'>5276 7547 8976 3959</p>
                                </div>
                            </div>
                            <div className='bg-gradient-to-r flex flex-col gap-16 rounded-lg from-primary to-secondary p-3 md:flex-[1]'>
                                <div className='flex items-center justify-between'>
                                    <div className='h-[40px] w-[50px]'>
                                        <img src="/crest.png" alt="" className='w-full h-full object-cover' />
                                    </div>

                                    <p className='text-white'>${formatNumber(data?.balance_current)}</p>
                                </div>

                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center gap-2'>
                                        <p className='border-[1px] text-[13px] text-white border-white p-1 rounded-md'>{data?.first_name + " " + data?.last_name}</p>
                                        <p className='text-white border-[1px] text-[13px] border-white p-1 rounded-md md:px-2'>271</p>
                                    </div>

                                    <p className='border-[1px] text-[13px] text-white border-white p-1 rounded-md md:px-2'>06/27</p>
                                </div>
                            </div>

                            <div className='bg-white rounded-lg p-3 md:flex-[1] h-[30%]'>
                                <button onClick={() => setActivate(!activate)} className={`bg-primary p-2 w-full rounded-md text-[13px] text-white ${activate ? 'bg-red-500' : ''}`}>
                                    {activate ? 'Deactivate Card' : "Activate Card"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card