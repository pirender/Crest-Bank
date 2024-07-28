// app/bank-statement/statement/page.tsx
'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react';
import html2canvas from 'html2canvas-pro';

const transactions = [
    {
        id: '66618db75cd20',
        amount: '$2,500.00',
        type: 'Savings',
        paymentAccount: 'Current Account',
        status: 'processing',
        date: '2024-06-06 11:21:43',
    },
    {
        id: '6659f0e38f86a',
        amount: '$50,000.00',
        type: 'Credit',
        paymentAccount: 'Current Account',
        status: 'completed',
        date: '2024-05-31 08:46:00',
    },
    {
        id: '6659eff8e07d1',
        amount: '$50,000.00',
        type: 'Crypto Deposit',
        paymentAccount: 'Current Account',
        status: 'completed',
        date: '2024-05-31 16:42:48',
    },
];

const Statement: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    const [transaction, setTransaction] = useState<any>(null);

    useEffect(() => {
        if (id) {
            const foundTransaction = transactions.find((transaction) => transaction.id === id);
            setTransaction(foundTransaction);
        }
    }, [id]);

    const handlePrint = () => {
        const printContent = document.getElementById('print-section')?.innerHTML;
        var originalContents = document.body.innerHTML;

        document.body.innerHTML = printContent as string;
        window.print();
        document.body.innerHTML = originalContents;
    };

    const generateImg = () => {
        const input = document.getElementById('print-section');
        html2canvas(input as HTMLElement)
            .then(function (canvas) {
                let anchorTag = document.createElement("a");
                anchorTag.download = "invoice.png";
                anchorTag.href = canvas.toDataURL();
                anchorTag.click();
            });
    }

    // if (!transaction) {
    //     return <div>Loading...</div>;
    // }


    return (
        <div className='md:pt-6 pt-6  md:pb-24 pb-[200px]'>
            <div className='mycontainer'>
                <div className='px-4'>
                    <div>
                        <div className='flex gap-5 flex-col md:flex-row'>
                            {/* left */}
                            <div id='print-section' className='bg-white rounded-lg md:flex-[3]'>
                                {/* top */}
                                <div className='flex flex-col gap-5 border-b-[1px] border-gray-300 p-4'>
                                    {/* top t */}
                                    <div className='flex flex-col gap-3 md:flex-row md:items-center md:justify-between'>
                                        <div className='flex items-center gap-2'>
                                            {/* logo div */}
                                            <div>
                                                <img src="/crest.png" alt="" className='w-[50px]' />
                                            </div>
                                            {/* logo div */}
                                            <h3>Crest Bank</h3>
                                        </div>

                                        <div>
                                            <h3>Invoice: <span className='text-[#4361ee]'>#{transaction.id}</span></h3>
                                            <h3 className='text-[#4361ee]'>Transaction {transaction.status}</h3>
                                        </div>
                                    </div>
                                    {/* top t */}

                                    {/* top b */}
                                    <div>
                                        <p className='text-[14px]'>3 Abbey Road, San Francisco CA 94102</p>
                                        <p className='text-[14px]'>support@valorstrive.com</p>
                                        <p className='text-[14px]'>+1987655678</p>
                                    </div>
                                    {/* top b */}
                                </div>
                                {/* top */}

                                {/* middle */}
                                <div className='p-4 flex flex-col gap-4 border-b-[1px] border-gray-300'>
                                    <div>
                                        <h3 className="text-lg font-bold text-primary">Transaction Details</h3>
                                    </div>

                                    <div className='flex flex-col gap-3'>
                                        <div className='flex items-center gap-3'>
                                            <p className='text-[12px] flex-1 md:text-[15px]'>Transaction Amount:</p>
                                            <p className='text-[12px] flex-1 md:text-[15px]'>{transaction.amount}</p>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <p className='text-[12px] flex-1 md:text-[15px]'>Transaction Type:</p>
                                            <p className='text-[12px] flex-1 md:text-[15px]'>{transaction.type}</p>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <p className='text-[12px] flex-1 md:text-[15px]'>Payment Account:</p>
                                            <p className='text-[12px] flex-1 md:text-[15px]'>{transaction.paymentAccount}</p>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <p className='text-[12px] flex-1 md:text-[15px]'>Transaction Status:</p>
                                            <p className='text-[12px] flex-1 md:text-[15px]'>{transaction.status}</p>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <p className='text-[12px] flex-1 md:text-[15px]'>Transaction Date:</p>
                                            <p className='text-[12px] flex-1 md:text-[15px]'>{transaction.date}</p>
                                        </div>
                                    </div>
                                </div>
                                {/* middle */}

                                {/* bottom */}
                                <div className='p-4'>
                                    <p className='text-[12px] md:text-[13px] text-[#888ea8] font-medium'><strong>NOTE: </strong> If you have any questions or would like more information, please call our 24-hour Contact Centre on 1987655678 or send an email to support@valorstrive.com</p>
                                </div>
                                {/* bottom */}
                            </div>
                            {/* left */}

                            {/* right */}
                            <div className='md:flex-[1] bg-white rounded-xl h-[40%] p-[25px] flex flex-col gap-3'>
                                {/* top button */}
                                <div>
                                    <button onClick={handlePrint} className='bg-primary w-full p-2 rounded-md text-white'>Print Invoice</button>
                                </div>
                                {/* top button */}

                                {/* bottom button */}
                                <div>
                                    <button className='bg-red-500 w-full p-2 rounded-md text-white'>Report Transaction</button>
                                </div>
                                {/* bottom button */}
                            </div>
                            {/* right */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};

const StatementPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Statement />
        </Suspense>
    );
};

export default StatementPage;
