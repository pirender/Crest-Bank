import React from 'react'

const Ticketform = () => {
    return (
        <div className='py-4 md:pb-24 lg:pb-0 pb-[600px]'>
            <div className="mycontainer">
                <div className="px-4">
                    <div className=''>
                        <div className='bg-white rounded-lg flex flex-col gap-4 p-4 md:max-w-md md:my-0 md:mx-auto'>
                            <div>
                                <p>New Ticket</p>
                            </div>

                            <form action="" className='flex flex-col gap-5'>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-gray-400 text-[13px] md:text-[16px]'>Ticket Type</p>

                                    <select name="" id="" className='w-full p-2 rounded-md border-[1px] border-gray-400 bg-transparent'>
                                        <option value="" defaultChecked>Select Loan Type</option>
                                        <option value="">My Account</option>
                                        <option value="Transfer">Transfer</option>
                                        <option value="Security">Security</option>
                                    </select>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-gray-400 text-[13px] md:text-[16px]'>More information</p>

                                    <textarea name="" id="" rows={8} placeholder='Well detailed' className='p-2 rounded-md placeholder:text-gray-400 placeholder:text-[13px] focus:outline-none border-[1px] border-gray-400'></textarea>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-gray-400 text-[13px] md:text-[16px]'>Account password</p>

                                    <input type="text" name="" id="" placeholder='*****' className='p-2 rounded-md placeholder:text-gray-400 placeholder:text-[13px] focus:outline-none border-[1px] border-gray-400' />
                                </div>

                                <div>
                                    <button type="submit" className='text-[13px] text-white bg-primary p-[10px] rounded-md'>
                                        Create new ticket
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ticketform