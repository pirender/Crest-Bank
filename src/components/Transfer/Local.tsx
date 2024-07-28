'use client'
import { useState } from 'react';
import axios from 'axios';
import { GrStatusGood } from "react-icons/gr";
import { GiCancel } from "react-icons/gi";
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import { formatNumber } from '@/lib/util';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Local = () => {
    const { data } = useSWR("/api/get-user", fetcher);

    const [amount, setAmount] = useState('');
    const [paymentAccount, setPaymentAccount] = useState('');
    const [recipientName, setRecipientName] = useState('');
    const [recipientAccount, setRecipientAccount] = useState('');
    const [recipientBank, setRecipientBank] = useState('');
    const [details, setDetails] = useState('');
    const [status, setStatus] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter()
    // modal?.showModal();


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true)
        try {
            const response = await axios.post('https://crestbankplc.vercel.app/api/transfer', {
                type: 'Local Transfer',
                amount: parseFloat(amount),
                payment_account: paymentAccount,
                recipient_name: recipientName,
                recipient_account: recipientAccount,
                recipient_bank: recipientBank,
                details: details,
            });
            setStatus(response.data.message);
            setLoading(false)
            const modal = document.getElementById(
                "my_modal_1"
            ) as HTMLDialogElement | null;
            if (modal) {
                modal.showModal()
            }
            setAmount('')
            setRecipientAccount('')
            setRecipientBank('')
            setRecipientName('')
            setPaymentAccount('')
            setDetails('')
            setTimeout(() => {
                modal?.close();
            }, 2500);
            router.push('/dashboard')
        } catch (error: any) {
            if (error) {
                setError('An unexpected error occurred');
            }
        }
    };

    let balance = 0;
    if (data) {
        if (data.account_type === 'Savings Account') {
            balance = data.balance_savings;
        } else if (data.account_type === 'Current Account') {
            balance = data.balance_current;
        } else if (data.account_type === 'Fixed Deposit Account') {
            balance = data.balance_fixed_deposit;
        } else if (data.account_type === 'Checking Account') {
            balance = data.balance_checking;
        } else if (data.account_type === 'Non Resident Account') {
            balance = data.balance_non_resident;
        } else if (data.account_type === 'Joint Account') {
            balance = data.balance_joint;
        } else {
            balance = 0;
        }
    }
    let account = 0;
    if (data) {
        if (data.account_type === 'Savings Account') {
            account = data.savings_account;
        } else if (data.account_type === 'Current Account') {
            account = data.current_account;
        } else if (data.account_type === 'Fixed Deposit Account') {
            account = data.fixed_deposit_account;
        } else if (data.account_type === 'Checking Account') {
            account = data.checking_account;
        } else if (data.account_type === 'Non Resident Account') {
            account = data.non_resident_account;
        } else if (data.account_type === 'Joint Account') {
            account = data.joint_account;
        } else {
            account = 0;
        }
    }

    return (
        <div className='pt-6'>
            <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Local Transfer</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Amount (Total Balance: {data ? formatNumber(balance) : formatNumber(0)})</label>
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
                            value={paymentAccount}
                            onChange={(e) => setPaymentAccount(e.target.value)}
                            className="mt-1 block w-full p-2 border border-gray-300 bg-[#e2ebf7] rounded-md shadow-sm  sm:text-sm"
                        >
                            <option defaultChecked>Select Payment Account</option>
                            <option>({data ? data?.savings_account : 0}) Savings: ${data ? formatNumber(data?.balance_savings) : formatNumber(0)}</option>
                            <option>({account}) {data?.account_type}: ${formatNumber(balance)}</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Bank Name</label>
                        <input
                            type="text"
                            value={recipientBank}
                            onChange={(e) => setRecipientBank(e.target.value)}
                            required
                            className="mt-1 bg-[#e2ebf7] focus:outline-none block w-full p-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Account Number</label>
                        <input
                            type="text"
                            value={recipientAccount}
                            onChange={(e) => setRecipientAccount(e.target.value)}
                            required
                            className="mt-1 focus:outline-none block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-[#e2ebf7] sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Account Name</label>
                        <input
                            type="text"
                            value={recipientName}
                            onChange={(e) => setRecipientName(e.target.value)}
                            required
                            className="mt-1 focus:outline-none block w-full p-2 border border-gray-300 rounded-md bg-[#e2ebf7] shadow-sm  sm:text-sm"
                        />
                    </div>
                    
                      
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Details</label>
                                <textarea
                                    value={details}
                                    onChange={(e) => setDetails(e.target.value)}
                                    required
                                    placeholder='Reason for transfer'
                                    rows={5}
                                    className="mt-1 focus:outline-none block w-full p-2 border border-gray-300 bg-[#e2ebf7] rounded-md shadow-sm  sm:text-sm"
                                />
                            </div>
                     
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-md shadow  focus:outline-none flex items-center justify-center"
                    >
                        {loading ? <span className="loading loading-spinner loading-sm bg-white"></span>
                            : "Transfer"}
                    </button>
                </form>

                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        {error && <div className='flex items-center justify-center gap-3'>
                            <GiCancel size={40} color='#ef4444' />
                            <p className='text-red-500'>{error}</p>
                        </div>}
                        {status && <div className='flex items-center justify-center gap-3'>
                            <GrStatusGood size={40} color='#22c55e' />
                            <p className='text-green-500'>{status}</p>
                        </div>}
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default Local;
