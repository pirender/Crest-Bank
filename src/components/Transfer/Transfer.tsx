'use client'
import { useState } from 'react';
import axios from 'axios';
import { GrStatusGood } from "react-icons/gr";
import { GiCancel } from "react-icons/gi";
import { useRouter } from 'next/navigation';

interface TransferFormProps {
    type: string;
}

const TransferForm = ({ type }: TransferFormProps) => {
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('USD');
    const [recipientName, setRecipientName] = useState('');
    const [recipientAccount, setRecipientAccount] = useState('');
    const [recipientBank, setRecipientBank] = useState('');
    const [swiftCode, setSwiftCode] = useState('');
    const [iban, setIban] = useState('');
    const [bankAddress, setBankAddress] = useState('');
    const [status, setStatus] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter()
    // modal?.showModal();


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true)
        try {
            const response = await axios.post('/api/transfer', {
                type,
                amount: parseFloat(amount),
                currency,
                recipient_name: recipientName,
                recipient_account: recipientAccount,
                recipient_bank: recipientBank,
                swift_code: swiftCode,
                iban,
                bank_address: bankAddress,
            });
            setStatus(response.data.message);
            setLoading(false)
            const modal = document.getElementById(
                "my_modal_1"
            ) as HTMLDialogElement | null;
            if(modal){
                modal.showModal()
            }
            setAmount('')
            setRecipientAccount('')
            setRecipientBank('')
            setSwiftCode('')
            setRecipientName('')
            setIban('')
            setBankAddress('')
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

    return (
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-primary">{type} {type === 'Other' ? "Bank Transfer" : "Transfer"}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Amount</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                        className="mt-1 focus:outline-none block w-full p-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Currency</label>
                    <select
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm"
                    >
                        <option value="USD">USD</option>
                        <option value="GBP">GBP</option>
                        <option value="EUR">EUR</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Recipient Name</label>
                    <input
                        type="text"
                        value={recipientName}
                        onChange={(e) => setRecipientName(e.target.value)}
                        required
                        className="mt-1 focus:outline-none block w-full p-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Recipient Account</label>
                    <input
                        type="text"
                        value={recipientAccount}
                        onChange={(e) => setRecipientAccount(e.target.value)}
                        required
                        className="mt-1 focus:outline-none block w-full p-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm"
                    />
                </div>
                {type !== 'Local' && (
                    <>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Recipient Bank</label>
                            <input
                                type="text"
                                value={recipientBank}
                                onChange={(e) => setRecipientBank(e.target.value)}
                                required
                                className="mt-1 focus:outline-none block w-full p-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm"
                            />
                        </div>
                        {type === 'International' && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">SWIFT Code</label>
                                    <input
                                        type="text"
                                        value={swiftCode}
                                        onChange={(e) => setSwiftCode(e.target.value)}
                                        required
                                        className="mt-1 focus:outline-none block w-full p-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">IBAN</label>
                                    <input
                                        type="text"
                                        value={iban}
                                        onChange={(e) => setIban(e.target.value)}
                                        required
                                        className="mt-1 focus:outline-none block w-full p-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Bank Address</label>
                                    <input
                                        type="text"
                                        value={bankAddress}
                                        onChange={(e) => setBankAddress(e.target.value)}
                                        required
                                        className="mt-1 focus:outline-none block w-full p-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm"
                                    />
                                </div>
                            </>
                        )}
                    </>
                )}
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
                    <GiCancel size={40} color='#ef4444'/>
                    <p className='text-red-500'>{error}</p>
                    </div>}
                    {status && <div className='flex items-center justify-center gap-3'>
                    <GrStatusGood size={40} color='#22c55e'/>
                    <p className='text-green-500'>{status}</p>
                    </div>}
                </div>
            </dialog>
        </div>
    );
};

export default TransferForm;
