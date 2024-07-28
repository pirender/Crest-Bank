// components/CheckDepositForm.tsx
'use client';

import React from 'react';

const CheckDepositForm: React.FC = () => {
  return (
    <div className="flex items-start justify-center min-h-screen md:pt-6">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-[14px] md:text-[15px] font-bold mb-4 text-center text-primary">Mobile Check Deposit</h2>
        <form className="space-y-4">
          <div className="border border-gray-300 rounded p-4">
            <div className="flex justify-between items-center">
              <label className="text-primary text-[13px] md:text-[15px]">Please upload cheque deposit below</label>
            </div>
            <div className="flex items-center mt-4">
              <input type="file" className="w-full p-2 border rounded border-gray-300" />
            </div>
            <div className="flex justify-center mt-4">
              <img
                src="/bga.png"
                alt="Upload Placeholder"
                className="w-24 h-24"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-primary text-white px-6 py-2 rounded text-[13px] md:text-[15px]">Deposit Cheque</button>
          </div>
          <p className="text-gray-500 text-center mt-4 text-[13px] md:text-[15px]">Note: cheque deposit may be delayed for confirmation.</p>
        </form>
      </div>
    </div>
  );
};

export default CheckDepositForm;
