import React from 'react'
import { FaMoneyBillTransfer } from "react-icons/fa6";
const Transfer = () => {
    return (
        <div className='md:pt-6 py-4 pb-[600px] md:pb-0'>
            <div className="mycontainer">
                <div className="px-4">
                    <div>
                        <div className='flex flex-col gap-7 '>
                            {/* Local trans */}
                            <a href="/dashboard/transfer/local" className='bg-white p-4 rounded-[8px]'>
                                <div>
                                    <div>
                                        <FaMoneyBillTransfer size={30} color='#004080'/>
                                    </div>

                                    <div>
                                        <p className='text-primary font-bold'>Local Transfer</p>
                                    </div>
                                </div>
                            </a>
                            {/* Local trans */}

                            {/* Inter trans */}
                            <a href="/dashboard/transfer/international" className='bg-white p-4 rounded-[8px]'>
                                <div>
                                    <div>
                                        <FaMoneyBillTransfer size={30} color='#004080'/>
                                    </div>

                                    <div>
                                        <p className='text-primary font-bold'>International Transfer</p>
                                    </div>
                                </div>
                            </a>
                            {/* Inter trans */}

                            {/* other trans */}
                            <a href="/dashboard/transfer/other" className='bg-white p-4 rounded-[8px]'>
                                <div>
                                    <div>
                                        <FaMoneyBillTransfer size={30} color='#004080'/>
                                    </div>

                                    <div>
                                        <p className='text-primary font-bold'>Other Banks Transfer</p>
                                    </div>
                                </div>
                            </a>
                            {/* other trans */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transfer