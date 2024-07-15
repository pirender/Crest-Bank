'use client'
import React from 'react'
import useSWR from "swr";
import { RiBarcodeBoxLine } from "react-icons/ri";
import { MdAccountBalanceWallet } from "react-icons/md";
import { SiDepositphotos } from "react-icons/si";
import { GiPayMoney } from "react-icons/gi";
import { RiCoinsFill } from "react-icons/ri";
import { VscReferences } from "react-icons/vsc";
import { PiHandDepositFill } from "react-icons/pi";

interface Transaction {
    id: string;
    fields: {
        name: string;
        status: string;
        account_number: string;
        recipient_account: string;
        recipient_name: string;
        recipient_bank: string;
        swift_code: string,
        iban: string,
        bank_address: string;
        date: string
        id: string,
        user_id: string,
        type: string,
        amount: number,
        currency: string,
    };
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());


const Main = () => {
    const { data } = useSWR("/api/transactions", fetcher);
    const { data: user } = useSWR("/api/get-user", fetcher);

    return (
        <div className='md:pt-6 pt-4 pb-32'>
            <div className="mycontainer md:hidden">
                <div className="px-4">
                    <div>
                        <div className='flex flex-col gap-4'>
                            {/* left */}
                            <div className='flex flex-col gap-4 bg-white rounded-[8px] p-4 md:flex-[1]'>
                                <div className='flex flex-col gap-3'>
                                    <h3 className='font-bold text-[14px] text-primary'>User's Account Financial Status</h3>
                                    <p className='text-gray-400 text-[14px]'>Account status</p>
                                </div>

                                <div className='flex flex-col gap-5'>
                                    <div className='flex items-center gap-4'>
                                        <div><RiBarcodeBoxLine size={30} color='#004080' /></div>

                                        <div>
                                            <h4 className='font-bold text-[14px] text-primary'>{user?.account_number}</h4>
                                            <p className='text-gray-400 text-[14px]'>Account Number</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <div><MdAccountBalanceWallet size={30} color='#004080' /></div>

                                        <div>
                                            <h4 className='font-bold text-[14px] text-primary'>$ {user?.balance_usd?.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h4>
                                            <p className='text-gray-400 text-[14px]'>USD Account</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <div><MdAccountBalanceWallet size={30} color='#004080' /></div>

                                        <div>
                                            <h4 className='font-bold text-[14px] text-primary'>€ {user?.balance_eur?.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h4>
                                            <p className='text-gray-400 text-[14px]'>Euro Account</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <div><MdAccountBalanceWallet size={30} color='#004080' /></div>

                                        <div>
                                            <h4 className='font-bold text-[14px] text-primary'>£ {user?.balance_gbp?.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h4>
                                            <p className='text-gray-400 text-[14px]'>Pounds Account</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <div><SiDepositphotos size={30} color='#004080' /></div>

                                        <div>
                                            <h4 className='font-bold text-[14px] text-primary'>USD 0.00</h4>
                                            <p className='text-gray-400 text-[14px]'>Total Deposits</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <div><GiPayMoney size={30} color='#004080' /></div>

                                        <div>
                                            <h4 className='font-bold text-[14px] text-primary'>USD 0.00</h4>
                                            <p className='text-gray-400 text-[14px]'>Fixed Deposit Interest</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <div><RiCoinsFill size={30} color='#004080' /></div>

                                        <div>
                                            <h4 className='font-bold text-[14px] text-primary'>USD {user?.bonus}</h4>
                                            <p className='text-gray-400 text-[14px]'>Account Bonus</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4 text-primary'>
                                        <div><VscReferences size={30} color='#004080' /></div>

                                        <div>
                                            <h4 className='font-bold text-[14px] text-primary'>USD 0.00</h4>
                                            <p className='text-gray-400 text-[14px]'>Referral Bonus</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <div><PiHandDepositFill size={30} color='#004080' /></div>

                                        <div>
                                            <h4 className='font-bold text-[14px] text-primary'>0 Fixed Deposit</h4>
                                            <p className='text-gray-400 text-[14px]'>Active Fixed Deposit</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* left */}

                            {/* right */}
                            <div className='flex flex-col gap-4 md:flex-[3]'>
                                <div>
                                    <h3 className='font-bold text-[14px] text-primary'>Transactions</h3>
                                </div>
                                {data?.transactions?.map((transaction: Transaction) => (
                                    <div key={transaction.id} className='md:flex-row flex gap-4 flex-col md:justify-between bg-white md:items-center p-4 rounded-[8px]'>
                                        <div className='flex flex-col gap-1'>
                                            <h5 className='font-bold text-[14px] text-primary'>Name</h5>
                                            <p className='text-gray-400 text-[14px]'>{transaction.fields.recipient_name}</p>
                                        </div>
                                        <div className='flex flex-col gap-1'>
                                            <h5 className='font-bold text-[14px] text-primary'>Amount</h5>
                                            <p className='text-red-500 text-[14px]'>-{transaction.fields.currency === "USD" ? '$' : transaction.fields.currency === "GBP" ? "£" : "€" }{transaction.fields.amount}</p>
                                        </div>
                                        <div className='flex flex-col ga-1'>
                                            <h5 className='font-bold text-[14px] text-primary'>Account Number</h5>
                                            <p className='text-gray-400 text-[14px]'>{transaction.fields.recipient_account}</p>
                                        </div>
                                        <div className='flex flex-col gap-1'>
                                            <h5 className='font-bold text-[14px] text-primary'>Status</h5>
                                            <p className='text-green-500 text-[14px]'>{transaction.fields.status}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* right */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:block">
                <div className="px-4">
                    <div>
                        <div className='flex flex-col md:flex-row gap-4'>
                            {/* left */}
                            <div className='flex flex-col gap-4 bg-white rounded-[8px] p-4 md:flex-[1]'>
                                <div className='flex flex-col gap-3'>
                                    <h3 className='font-bold text-[14px] text-primary'>User's Account Financial Status</h3>
                                    <p className='text-gray-400 text-[14px]'>Account status</p>
                                </div>

                                <div className='flex flex-col gap-5'>
                                    <div className='flex items-center gap-4'>
                                        <div><RiBarcodeBoxLine size={30} color='#004080' /></div>

                                        <div>
                                            <h4 className='font-bold text-[14px] text-primary'>{user?.account_number}</h4>
                                            <p className='text-gray-400 text-[14px]'>Account Number</p>
                                        </div>
                                    </div>

                                    <div className='flex items-center gap-4'>
                                        <div><MdAccountBalanceWallet size={30} color='#004080' /></div>

                                        <div>
                                            <h4 className='font-bold text-[14px] text-primary'>$ {user?.balance_usd?.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h4>
                                            <p className='text-gray-400 text-[14px]'>USD Account</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <div><MdAccountBalanceWallet size={30} color='#004080' /></div>

                                        <div>
                                            <h4 className='font-bold text-[14px] text-primary'>€ {user?.balance_eur?.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h4>
                                            <p className='text-gray-400 text-[14px]'>Euros Account </p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <div><MdAccountBalanceWallet size={30} color='#004080' /></div>

                                        <div>
                                            <h4 className='font-bold text-[14px] text-primary'>£ {user?.balance_gbp?.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h4>
                                            <p className='text-gray-400 text-[14px]'>Pounds Account </p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <div><SiDepositphotos size={30} color='#004080' /></div>

                                        <div>
                                            <h4 className='font-bold text-[14px] text-primary'>$ 0.00</h4>
                                            <p className='text-gray-400 text-[14px]'>Total Deposits</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <div><GiPayMoney size={30} color='#004080' /></div>

                                        <div>
                                            <h4 className='font-bold text-[14px] text-primary'>$ 0.00</h4>
                                            <p className='text-gray-400 text-[14px]'>Fixed Deposit Interest</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <div><RiCoinsFill size={30} color='#004080' /></div>

                                        <div>
                                            <h4 className='font-bold text-[14px] text-primary'>$ {user?.bonus}</h4>
                                            <p className='text-gray-400 text-[14px]'>Account Bonus</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4 text-primary'>
                                        <div><VscReferences size={30} color='#004080' /></div>

                                        <div>
                                            <h4 className='font-bold text-[14px] text-primary'>$ 0.00</h4>
                                            <p className='text-gray-400 text-[14px]'>Referral Bonus</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <div><PiHandDepositFill size={30} color='#004080' /></div>

                                        <div>
                                            <h4 className='font-bold text-[14px] text-primary'>0 Fixed Deposit</h4>
                                            <p className='text-gray-400 text-[14px]'>Active Fixed Deposit</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* left */}

                            {/* right */}
                            <div className='flex flex-col gap-4 md:flex-[3]'>
                                <div>
                                    <h3 className='font-bold text-[14px] text-primary'>Transactions</h3>
                                </div>
                                {data?.transactions?.map((transaction: Transaction) => (
                                    <div key={transaction.id} className='md:flex-row flex gap-4 flex-col md:justify-between bg-white md:items-center p-4 rounded-[8px]'>
                                        <div className='flex flex-col gap-1'>
                                            <h5 className='font-bold text-[14px] text-primary'>Name</h5>
                                            <p className='text-gray-400 text-[14px] capitalize'>{transaction.fields.recipient_name}</p>
                                        </div>
                                        <div className='flex flex-col gap-1'>
                                            <h5 className='font-bold text-[14px] text-primary'>Amount</h5>
                                            <p className='text-red-500 text-[14px]'>-{transaction.fields.currency === "USD" ? '$' : transaction.fields.currency === "GBP" ? "£" : "€" }{transaction.fields.amount}</p>
                                        </div>
                                        <div className='flex flex-col gap-1'>
                                            <h5 className='font-bold text-[14px] text-primary'>Account Number</h5>
                                            <p className='text-gray-400 text-[14px]'>{transaction.fields.recipient_account}</p>
                                        </div>
                                        <div className='flex flex-col gap-1'>
                                            <h5 className='font-bold text-[14px] text-primary'>Status</h5>
                                            <p className='text-green-500 text-[14px]'>{transaction.fields.status}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* right */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main