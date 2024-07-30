'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { GrStatusGood } from "react-icons/gr";
import { GiCancel } from "react-icons/gi";
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import { formatNumber } from '@/lib/util';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Inter = () => {
    const { data } = useSWR("/api/get-user", fetcher);
    const [countries, setCountries] = useState<{ name: string, iso2: string }[]>([]);
    const [amount, setAmount] = useState('');
    const [country, setCountry] = useState('');
    const [details, setDetails] = useState('');
    const [account_number, setAccountNumber] = useState('');
    const [account_type, setAccountType] = useState('');
    const [account_name, setAccountName] = useState('');
    const [routing_number, setRoutingNumber] = useState('');
    const [payment_account, setPaymentAccount] = useState('');
    const [bank_name, setBankName] = useState('');
    const [pincode, setPinCode] = useState('');
    const [step, setStep] = useState(1);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const router = useRouter()
    // modal?.showModal();

    useEffect(() => {
        // Fetch countries with ISO2 codes
        axios.get('https://api.countrystatecity.in/v1/countries', {
            headers: {
                "X-CSCAPI-KEY": "aWIxUjJ0bUgwZDk4ckRVQkRQcmJyS3RwNjB3TlFQY01UbVVaTEZLTw=="
            }
        })
            .then(response => {
                const countryData = response.data.map((country: any) => ({
                    name: country.name,
                    iso2: country.iso2
                }));
                setCountries(countryData.sort((a: any, b: any) => a.name.localeCompare(b.name)));
            })
            .catch(error => console.error('Error fetching countries:', error));
        if (data) {
            setLoading(false)

        }
    }, [data]);


    const setStepFunc = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setStep(2)
        }, 3000);
    }


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const modal = document.getElementById(
            "inter-modal"
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

            const response = await axios.post('/api/international-transfer', {
                amount,
                country,
                details,
                account_number,
                account_type,
                account_name,
                routing_number,
                payment_account,
                bank_name
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
                        setCountry('')
                        setAccountNumber('')
                        setAccountType('')
                        setPaymentAccount('')
                        setAccountName('')
                        setDetails('')
                        setRoutingNumber('')
                        setBankName('')
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
        <div className={`pt-6 ${step === 2 ? 'lg:pb-0 pb-[600px]' : ''}`}>
            <dialog id="loading-modal" className={`modal bg-[#004080] ${loading ? 'opacity-100' : ''}`}>
                <div className='flex items-center justify-center gap-3'>
                    <span className="loading loading-ring loading-lg bg-white"></span>
                </div>
            </dialog>
            <dialog id="inter-modal" className="modal">
                    <div className="modal-box">
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
            {step === 1 ? (<div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-primary">International Transfer</h3>
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
                        <label className="block mb-1">Account Type</label>
                        <select value={account_type}
                            onChange={(e) => setAccountType(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 bg-[#e2ebf7] rounded-md shadow-sm  sm:text-sm">
                            <option value="">Select Account Type</option>
                            <option value="Savings Account">Savings Account</option>
                            <option value="Current Account">Current Account</option>
                            <option value="Fixed Deposit Account">Fixed Deposit Account</option>
                            <option value="Checking Account">Checking Account</option>
                            <option value="Non Resident Account">Non Resident Account</option>
                            <option value="Joint Account">Joint Account</option>
                            <option value="Online Banking">Online Banking</option>
                            <option value="Domicilary Account">Domicilary Account</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Bank Name</label>
                        <input
                            type="text"
                            value={bank_name}
                            onChange={(e) => setBankName(e.target.value)}
                            required
                            className="mt-1 bg-[#e2ebf7] focus:outline-none block w-full p-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm"
                        />
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
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Account Name</label>
                        <input
                            type="text"
                            value={account_name}
                            onChange={(e) => setAccountName(e.target.value)}
                            required
                            className="mt-1 focus:outline-none block w-full p-2 border border-gray-300 rounded-md bg-[#e2ebf7] shadow-sm  sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Country</label>
                        <select value={country} onChange={(e) => setCountry(e.target.value)}
                            className="mt-1 block w-full p-2 border border-gray-300 bg-[#e2ebf7] rounded-md shadow-sm  sm:text-sm">
                            <option value="">Select Country</option>
                            {countries.map(country => (
                                <option key={country.iso2} value={country.name}>{country.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Routine Number/ Bank Code</label>
                        <input
                            type="text"
                            value={routing_number}
                            onChange={(e) => setRoutingNumber(e.target.value)}
                            required
                            className="mt-1 focus:outline-none block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-[#e2ebf7] sm:text-sm"
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
                       Transfer
                    </button>
                </form>

            </div>) : (<div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
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

export default Inter;
