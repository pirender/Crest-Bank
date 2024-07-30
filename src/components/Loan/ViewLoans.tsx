'use client'
import { formatDate } from '@/lib/util';
import React, { useEffect, useState } from 'react'
import useSWR from 'swr';
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ViewLoans = () => {
    const { data } = useSWR("/api/get-loan", fetcher);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        if (data) {
            setLoading(false)
        }
    }, [data]);

    return (
        <div className='py-4'>
            <div className="mycontainer">
                <div className="px-4">
                    <div>
                        <dialog id="loading-modal" className={`modal bg-[#004080] ${loading ? 'opacity-100' : ''}`}>
                            <div className='flex items-center justify-center gap-3'>
                                <span className="loading loading-ring loading-lg bg-white"></span>
                            </div>
                        </dialog>
                        <div className='overflow-x-auto'>
                            <table className='w-[920px]'>
                                <thead>
                                    <tr className='bg-primary'>
                                        <th className="border-b p-2 text-white text-left font-normal">#</th>
                                        <th className="border-b p-2 text-white text-left font-normal">Amount</th>
                                        <th className="border-b p-2 text-white text-left font-normal">Type</th>
                                        <th className="border-b p-2 text-white text-left font-normal">Duration</th>
                                        <th className="border-b p-2 text-white text-left font-normal">Status</th>
                                        <th className="border-b p-2 text-white text-left font-normal">Date</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {data?.loans?.map((loans: any, index: any) => (
                                        <tr key={loans.id}>
                                            <td className="border-b py-2 px-2">{index + 1}</td>
                                            <td className="border-b py-2 px-2 text-green-500">+${loans.fields.amount}</td>
                                            <td className="border-b py-2 px-2">{loans.fields.type}</td>
                                            <td className="border-b py-2 px-2">
                                                {loans.fields.duration}
                                            </td>
                                            <td className="border-b py-2 px-2">
                                                <span className={`py-1 px-2 rounded-full text-sm ${loans.fields.status === 'Approved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                                    {loans.fields.status}
                                                </span>
                                            </td>
                                            <td className="border-b p-2">{formatDate(loans.fields.date)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className='pl-2 mt-2'>
                                <p className='text-[13px] md:text-[18px] text-primary'>List of all loans</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewLoans