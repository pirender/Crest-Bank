'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { GrStatusGood } from "react-icons/gr";
import { GiCancel } from "react-icons/gi";
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import { formatNumber } from '@/lib/util';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Other = () => {
    const { data } = useSWR("/api/get-user", fetcher);
    const [amount, setAmount] = useState('');
    const [account_number, setAccountNumber] = useState('');
    const [payment_account, setPaymentAccount] = useState('');
    const [pincode, setPinCode] = useState('');
    const [code, setCode] = useState('');
    const [step, setStep] = useState(1);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const router = useRouter()

    useEffect(() => {
        if (data) {
            setLoading(false)
        }
    }, [data]);

    const email = data?.email;


    const setStepFunc = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true)
        const response = await axios.get('/api/verify-transfer');
        if(response.status === 200){
            setTimeout(() => {
                setLoading(false)
                setStep(2)
            }, 3000);
        }
    };

    const vCode = async (e: React.FormEvent) => {
        e.preventDefault();
        const modal = document.getElementById(
            "other-modal"
        ) as HTMLDialogElement | null;
        setLoading(true)
        const response = await axios.post('/api/verify-transfer-code', {email, code});
        const err = await response.data.error;

        if(err){
            setLoading(false)
            setError('Incorrect Code')
            modal?.showModal();
            setTimeout(() => {
                modal?.close();
                setError('');
            }, 2500);
        }else{
            setTimeout(() => {
                setLoading(false)
                setStep(3)
            }, 3000)
        }
    }




    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const modal = document.getElementById(
            "other-modal"
        ) as HTMLDialogElement | null;
        setLoading(true)

        if (pincode.length < 6) {
            setLoading(false);
            setError('Pincode must be 6 digits or more');
            modal?.showModal();
            setTimeout(() => {
                modal?.close();
                setError('');
            }, 2500);
            return;
        }

        if(account_number.length < 10) {
            setLoading(false);
            setError('account number must be 10 digits or more');
            modal?.showModal();
            setTimeout(() => {
                modal?.close();
                setError('');
            }, 2500);
            return;
        }

        if (pincode !== data?.pincode) {
            setLoading(false);
            setError('Incorrect Pincode');
            modal?.showModal();
            setTimeout(() => {
                modal?.close();
                setError('');
            }, 2500);
            setLoading(false);
            return;
        }
        try {

            const response = await axios.post('/api/other-bank', {
                amount,
                account_number,
                payment_account,
            });

            const id = await response.data.id;
            const err = await response.data.error;
            const message = await response.data.message;

            if (id) {
                if (message) {
                    setLoading(false)
                    setSuccess(message)
                    modal?.showModal()
                    setTimeout(() => {
                        setSuccess('');
                        setAmount('')
                        setAccountNumber('')
                        setPaymentAccount('')
                        setPinCode('')
                        modal?.close();
                        router.push(`/dashboard/statements/statement?id=${id}`);
                    }, 2500);
                }
            }
            if (err) {
                setLoading(false);
                setError(err);
                modal?.showModal();
                setTimeout(() => {
                    modal?.close();
                    setError('');
                    setPinCode('')
                    setStep(1)
                }, 2500);
            }
        } catch (error) {
            setLoading(false);
            setError(`Couldn't make transfer`);
            modal?.showModal();
            setTimeout(() => {
                modal?.close();
                setError('');
                setPinCode('')
                setStep(1)
            }, 2500);
        }
    };


    return (
        <div className={`pt-6`}>
            <dialog id="loading-modal" className={`modal bg-[#004080] ${loading ? 'opacity-100' : ''}`}>
                <div className='flex items-center justify-center gap-3'>
                    <span className="loading loading-ring loading-lg bg-white"></span>
                </div>
            </dialog>
            <dialog id="other-modal" className="modal">
                    <div className="modal-box bg-white">
                        {error && <div className='flex items-center justify-center gap-3'>
                            <GiCancel size={40} color='#ef4444' />
                            <p className='text-red-500'>{error}</p>
                        </div>}
                        {success && <div className='flex items-center justify-center gap-3'>
                            <GrStatusGood size={40} color='#22c55e' />
                            <p className='text-green-500'>{success}</p>
                        </div>}
                    </div>
                </dialog>
            {step === 1 && (<div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Transfer to user</h3>
                <form onSubmit={setStepFunc} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Amount (Total Balance: ${data ? formatNumber(data?.balance_current) : formatNumber(0)})</label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                            className="mt-1 focus:outline-none block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-[#e2ebf7]  sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Payment Account</label>
                        <select
                            value={payment_account}
                            onChange={(e) => setPaymentAccount(e.target.value)}
                            className="mt-1 block w-full p-2 border border-gray-300 bg-[#e2ebf7] rounded-md shadow-sm  sm:text-sm"
                        >
                            <option defaultChecked>Select Payment Account</option>
                            <option>({data ? data?.savings_account : 0}) Savings: ${data ? formatNumber(data?.balance_savings) : formatNumber(0)}</option>
                            <option>({data ? data?.current_account : 0}) Current: ${data ? formatNumber(data?.balance_current) : formatNumber(0)}</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Account Number</label>
                        <input
                            type="text"
                            value={account_number}
                            onChange={(e) => setAccountNumber(e.target.value)}
                            required
                            className="mt-1 focus:outline-none block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-[#e2ebf7] sm:text-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-md shadow  focus:outline-none flex items-center justify-center"
                    >
                       Transfer
                    </button>
                </form>

            </div>)}
            {step === 2 && (<div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Verify it's you: we sent a code to your email</h3>
                <form onSubmit={vCode} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Verification Code</label>
                        <input
                            type="text"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            placeholder='Verification Code'
                            required
                            className="mt-1 focus:outline-none block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-[#e2ebf7]  sm:text-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-md shadow  focus:outline-none flex items-center justify-center"
                    >
                        Verify
                    </button>
                </form>
            </div>)}

            {step === 3 && (<div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Enter your pincode</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Pincode</label>
                        <input
                            type="text"
                            value={pincode}
                            onChange={(e) => setPinCode(e.target.value)}
                            required
                            className="mt-1 focus:outline-none block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-[#e2ebf7]  sm:text-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-md shadow  focus:outline-none flex items-center justify-center"
                    >
                        Verify Pincode
                    </button>
                </form>
            </div>)}
        </div>
    );
};

export default Other;
