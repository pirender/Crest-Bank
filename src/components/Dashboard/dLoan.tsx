'use client'
import { formatNumber, transformString } from '@/lib/util';
import axios from 'axios';
import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { GiCancel } from 'react-icons/gi';
import { GrStatusGood } from 'react-icons/gr';
import useSWR from 'swr';


const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface LoanFormData {
  amount: string;
  settlement_account: string;
  type: string;
  duration: string;
  details: string;
  pincode: string;
}

const LoanRequest: React.FC = () => {
  const { data: user } = useSWR("/api/get-user", fetcher);
  const { register, handleSubmit, reset } = useForm<LoanFormData>();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const onSubmit: SubmitHandler<LoanFormData> = async data => {
    const modal = document.getElementById("loan-modal") as HTMLDialogElement | null;
    const loadingModal = document.getElementById("loading-modal") as HTMLDialogElement | null;

    loadingModal?.showModal();
    setLoading(true);

    if (data.pincode.length < 6) {
      setError('Pincode must be 6 digits or more');
      loadingModal?.close();
      modal?.showModal();
      setTimeout(() => {
        modal?.close();
        setError('');
      }, 2500);
      setLoading(false);
      return;
    }

    if (data.pincode !== user?.pincode) {
      setError('Incorrect Pincode');
      loadingModal?.close();
      modal?.showModal();
      setTimeout(() => {
        modal?.close();
        setError('');
      }, 2500);
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post('/api/new-loan', data);

      if (res.status === 200) {
        setSuccess('Your request is currently being reviewed');
        loadingModal?.close();
        modal?.showModal();
        setTimeout(() => {
          modal?.close();
          setSuccess('');
          reset();
        }, 2500);
        setLoading(false);
      }
    } catch (error) {
      setError(`Couldn't add new loan`);
      loadingModal?.close();
      modal?.showModal();
      setTimeout(() => {
        modal?.close();
        setError('');
      }, 2500);
      setLoading(false);
    }
  }

  let balance = 0;
  if (user) {
    if (user.account_type === 'Savings Account') {
      balance = user.balance_savings;
    } else if (user.account_type === 'Current Account') {
      balance = user.balance_current;
    } else if (user.account_type === 'Fixed Deposit Account') {
      balance = user.balance_fixed_deposit;
    } else if (user.account_type === 'Checking Account') {
      balance = user.balance_checking;
    } else if (user.account_type === 'Non Resident Account') {
      balance = user.balance_non_resident;
    } else if (user.account_type === 'Joint Account') {
      balance = user.balance_joint;
    } else {
      balance = 0;
    }
  }
  let account = 0;
  if (user) {
    if (user.account_type === 'Savings Account') {
      account = user.savings_account;
    } else if (user.account_type === 'Current Account') {
      account = user.current_account;
    } else if (user.account_type === 'Fixed Deposit Account') {
      account = user.fixed_deposit_account;
    } else if (user.account_type === 'Checking Account') {
      account = user.checking_account;
    } else if (user.account_type === 'Non Resident Account') {
      account = user.non_resident_account;
    } else if (user.account_type === 'Joint Account') {
      account = user.joint_account;
    } else {
      account = 0;
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center md:pt-6">
      <dialog id="loan-modal" className="modal">
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

      <dialog id="loading-modal" className="modal bg-[#004080]">
        <div className='flex items-center justify-center gap-3'>
          <span className="loading loading-ring loading-lg bg-white"></span>
        </div>
      </dialog>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-primary">Loan Request</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1">Loan Amount</label>
            <input
              type="text"
              {...register('amount', { required: true })}
              className="w-full p-2 border rounded bg-[#e2ebf7]"
              placeholder="$"
            />
          </div>
          <div>
            <label className="block mb-1">Settlement Account</label>
            <select {...register('settlement_account', { required: true })} className="w-full p-2 border rounded bg-[#e2ebf7]">
              <option defaultChecked>Select Settlement Account</option>
              <option>({user ? user?.savings_account : 0}) Savings: ${user ? formatNumber(user?.balance_savings) : formatNumber(0)}</option>
              <option>({account}) {user?.account_type}: ${formatNumber(balance)}</option>
            </select>
          </div>
          <div>
            <label className="block mb-1">Loan Type</label>
            <select {...register('type', { required: true })} className="w-full p-2 border rounded bg-[#e2ebf7]">

              <option>Select Loan Type</option>
              <option value="Business Loan">Business Loan</option>
              <option value="Individual Loan">Individual Loan</option>
              <option value="Student Loan">Student Loan</option>

            </select>
          </div>
          <div>
            <label className="block mb-1">Loan Duration</label>
            <select {...register('duration', { required: true })} className="w-full p-2 border rounded bg-[#e2ebf7]">

              <option>Select Loan Duration</option>
              <option value="1 Week">1 Week</option>
              <option value="2 Weeks">2 Weeks</option>
              <option value="1 Month">1 Month</option>
              <option value="3 Months">3 Months</option>
              <option value="A Year">A Year</option>

            </select>
          </div>
          <div>
            <label className="block mb-1">Details</label>
            <textarea
              rows={6}
              {...register('details', { required: true })}
              className="w-full p-2 border rounded bg-[#e2ebf7]"
              placeholder="Reason for loan"
            />
          </div>
          <div>
            <label className="block mb-1">Account Pincode</label>
            <input
              type="password"
              {...register('pincode', { required: true })}
              className="w-full p-2 border rounded bg-[#e2ebf7]"
              placeholder="******"
            />
          </div>
          <button type="submit" className="w-full bg-primary text-white p-2 rounded">
            {loading ? <span className="loading loading-spinner loading-sm bg-white"></span>
              : "Request Loan"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoanRequest;
