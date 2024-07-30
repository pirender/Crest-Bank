'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useSWR from 'swr';
import { formatNumber } from '../../lib/util';
import { SubmitHandler, useForm } from 'react-hook-form';
import { GiCancel } from 'react-icons/gi';
import { GrStatusGood } from 'react-icons/gr';
import { useRouter } from 'next/navigation';

interface FormData {
    amount: string;
    settlement_account: string;
    type: string;
    duration: string;
    pincode: string;
    balance_savings: string;
    balance_current: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const SavingsForm = () => {
    const { data: user } = useSWR("/api/get-user", fetcher);
    const { register, handleSubmit, reset, setValue } = useForm<FormData>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const router = useRouter()

    useEffect(() => {
        if (user) {
            setValue('balance_savings', user?.balance_savings);
            setValue('balance_current', user?.balance_current);
            setLoading(false)
        }
    }, [user, setValue]);

    const onSubmit: SubmitHandler<FormData> = async data => {
        console.log(data)
        const modal = document.getElementById("savings-modal") as HTMLDialogElement | null;
        setLoading(true);

        if (data.pincode.length < 6) {
            setLoading(false);
            setError('Pincode must be 6 digits or more');
            modal?.showModal();
            setTimeout(() => {
                modal?.close();
                setError('');
            }, 2500);
            return;
        }

        if (data.pincode !== user?.pincode) {
            setLoading(false);
            setError('Incorrect Pincode');
            modal?.showModal();
            setTimeout(() => {
                modal?.close();
                setError('');
            }, 2500);
            return;
        }

        try {
            const res = await axios.post('/api/new-savings', data);

            const err = await res.data.error;
            const message = await res.data.message;
            if (message) {
                setLoading(false);
                setSuccess('Savings added successfully, redirecting you....');
                modal?.showModal();
                setTimeout(() => {
                    setSuccess('');
                    reset();
                    modal?.close();
                    router.push('/dashboard/savings')
                }, 2500);
            }
            if(err) {
                setLoading(false);
                setError(err);
                modal?.showModal();
                setTimeout(() => {
                    modal?.close();
                    setError('');
                }, 2500);
            }
        } catch (error) {
            setLoading(false);
            setError(`Couldn't add new savings`);
            modal?.showModal();
            setTimeout(() => {
                modal?.close();
                setError('');
            }, 2500);
        }
    };

    return (
        <div className='py-4 lg:pb-6 pb-4'>
            <div className="mycontainer">
                <div className="px-4">
                    <div className=''>
                        <dialog id="savings-modal" className="modal">
                            <div className="modal-box bg-white">
                                {error && <div className='flex items-center justify-center gap-3'>
                                    <GiCancel size={40} color='#ef4444' />
                                    <p className='text-red-500'>{error}</p>
                                </div>}
                                {success && <div className='flex items-center justify-center gap-3'>
                                    <GrStatusGood size={40} color='#22c55e' />
                                    <p className='text-green-500 flex items-center gap-3'>{success}                               <span className="loading loading-dots loading-lg bg-green-500"></span>
                                    </p>
                                </div>}
                            </div>
                        </dialog>
                        <dialog id="loading-modal" className={`modal bg-[#004080] ${loading ? 'opacity-100' : ''}`}>
                            <div className='flex items-center justify-center gap-3'>
                                <span className="loading loading-ring loading-lg bg-white"></span>
                            </div>
                        </dialog>
                        <div className='flex flex-col gap-4 md:max-w-md md:my-0 md:mx-auto bg-white p-8 rounded shadow-md w-full max-w-md'>
                            <div>
                                <p className='text-2xl font-bold mb-6 text-primary'>New Savings</p>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
                                <div className='flex flex-col gap-2'>
                                    <p className=''>Amount Savings Plan</p>
                                    <select {...register('amount', { required: true })} className='w-full bg-[#e2ebf7] p-2 border rounded'>
                                        <option value="" defaultChecked>Select Savings Plan</option>
                                        <option value="$1000 (ROI 7%)">$1000 (ROI 7%)</option>
                                        <option value="$2500 (ROI 32%)">$2500 (ROI 32%)</option>
                                        <option value="$10000 (ROI 43%)">$10000 (ROI 43%)</option>
                                        <option value="$50000 (ROI 65%)">$50000 (ROI 65%)</option>
                                    </select>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className="block mb-1">Settlement Account</label>
                                    <select {...register('settlement_account', { required: true })} className="w-full p-2 border rounded bg-[#e2ebf7]">
                                        <option value="" defaultChecked>Select Settlement Account</option>
                                        <option value={`(${user ? user?.savings_account : 0}) Savings: ${user ? formatNumber(user?.balance_savings) : formatNumber(0)}`}>({user ? user?.savings_account : 0}) Savings: ${user ? formatNumber(user?.balance_savings) : formatNumber(0)}</option>
                                        <option value={`(${user ? user?.current_account : 0}) Current: ${user ? formatNumber(user?.balance_current) : formatNumber(0)}`}>({user ? user?.current_account : 0}) Current: ${user ? formatNumber(user?.balance_current) : formatNumber(0)}</option>
                                    </select>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className=''>Savings Type</p>
                                    <select {...register('type', { required: true })} className='w-full bg-[#e2ebf7] p-2 border rounded'>
                                        <option value="" defaultChecked>Select Savings Type</option>
                                        <option value="Business Savings">Business Savings</option>
                                        <option value="Individual Savings">Individual Savings</option>
                                        <option value="Student Savings">Student Savings</option>
                                    </select>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className=''>Savings Duration</p>
                                    <select {...register('duration', { required: true })} className='w-full bg-[#e2ebf7] p-2 border rounded'>
                                        <option value="" defaultChecked>Select Savings Duration</option>
                                        <option value="7 Days (1.5% interest)">7 Days (1.5% interest)</option>
                                        <option value="2 Weeks (3% interest)">2 Weeks (3% interest)</option>
                                        <option value="1 Month (5% interest)">1 Month (5% interest)</option>
                                        <option value="3 Days (7% interest)">3 Days (7% interest)</option>
                                        <option value="A Year (10% interest)">A Year (10% interest)</option>
                                    </select>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className=''>Account Pincode</p>
                                    <input type="text" {...register('pincode', { required: true })} placeholder='*****' className='w-full bg-[#e2ebf7] p-2 border rounded' />
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

export default SavingsForm;
