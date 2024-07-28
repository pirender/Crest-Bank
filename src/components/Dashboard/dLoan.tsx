'use client'
// pages/loan-request.tsx
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface LoanFormData {
  amount: string;
  settlementAccount: string;
  loanType: string;
  loanDuration: string;
  details: string;
  pincode: string;
}

const LoanRequest: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<LoanFormData>();

  const onSubmit: SubmitHandler<LoanFormData> = data => {
    console.log(data);
    // Handle form submission (e.g., send to server)
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center md:pt-6">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-primary">Loan Request</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1">Loan Amount</label>
            <input
              type="text"
              {...register('amount', { required: true })}
              className="w-full p-2 border rounded"
              placeholder="$"
            />
          </div>
          <div>
            <label className="block mb-1">Settlement Account</label>
            <select {...register('settlementAccount', { required: true })} className="w-full p-2 border rounded">
              <option value="">Select Settlement Account</option>
              {/* Add settlement account options here */}
            </select>
          </div>
          <div>
            <label className="block mb-1">Loan Type</label>
            <select {...register('loanType', { required: true })} className="w-full p-2 border rounded">
              <option value="">Select Loan Type</option>
              {/* Add loan type options here */}
            </select>
          </div>
          <div>
            <label className="block mb-1">Loan Duration</label>
            <select {...register('loanDuration', { required: true })} className="w-full p-2 border rounded">
              <option value="">Select Loan Duration</option>
              {/* Add loan duration options here */}
            </select>
          </div>
          <div>
            <label className="block mb-1">Details</label>
            <textarea
              {...register('details', { required: true })}
              className="w-full p-2 border rounded"
              placeholder="Reason for loan"
            />
          </div>
          <div>
            <label className="block mb-1">Account Pincode</label>
            <input
              type="password"
              {...register('pincode', { required: true })}
              className="w-full p-2 border rounded"
              placeholder="******"
            />
          </div>
          <button type="submit" className="w-full bg-primary text-white p-2 rounded">
            Request Loan
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoanRequest;
