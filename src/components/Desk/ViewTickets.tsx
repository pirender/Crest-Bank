import React from 'react'

const ViewTickets = () => {
    const transactions = [
        {
          sn: 1,
          amount: '+$2,500.00',
          type: 'Savings',
          duration: '1 week',
          status: 'Processing',
          date: '2024-06-06 11:21:43',
        },
        {
          sn: 2,
          amount: '+$50,000.00',
          type: 'Credit',
          duration: '2 weeks',
          status: 'Completed',
          date: '2024-05-31 08:46:00',
        },
        {
          sn: 3,
          amount: '+$50,000.00',
          type: 'Crypto Deposit',
          duration: '3 weeks',
          status: 'Completed',
          date: '2024-05-31 16:42:48',
        },
      ];
      

    return (
        <div className='py-4 md:pb-24 lg:pb-0 pb-[600px]'>
            <div className="mycontainer">
                <div className="px-4">
                    <div>
                        <div className='overflow-x-auto'>
                            <table className='w-[920px]'>
                                <thead>
                                    <tr className='bg-primary'>
                                        <th className="border-b p-2 text-white text-left font-normal">#</th>
                                        <th className="border-b p-2 text-white text-left font-normal">Amount</th>
                                        <th className="border-b p-2 text-white text-left font-normal">Type</th>
                                        <th className="border-b p-2 text-white text-left font-normal">Duration</th>
                                        <th className="border-b p-2 text-white text-left font-normal">Status</th>
                                        <th className="border-b p-2 text-white text-left font-normal">Date</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {transactions.map((transaction) => (
                                        <tr key={transaction.sn}>
                                            <td className="border-b py-2 px-2">{transaction.sn}</td>
                                            <td className="border-b py-2 px-2 text-green-500">{transaction.amount}</td>
                                            <td className="border-b py-2 px-2">{transaction.type}</td>
                                            <td className="border-b py-2 px-2">
                                               {transaction.duration}
                                            </td>
                                            <td className="border-b py-2 px-2">
                                                <span className={`py-1 px-2 rounded-full text-sm ${transaction.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                                    {transaction.status}
                                                </span>
                                            </td>
                                            <td className="border-b p-2">{transaction.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className='pl-2 mt-2'>
                                <p className='text-[13px] md:text-[18px] text-primary'>List of all tickets</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewTickets