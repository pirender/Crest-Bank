import React from 'react'

const Condition = () => {
    return (
        <div className='py-8'>
            <div className="mycontainer">
                <div className="px-4">
                    <div className='flex flex-col gap-6'>
                        <div>
                            <h1 className='text-primary text-[18px] lg:text-[54px] font-bold text-center'>Conditions to Apply</h1>
                        </div>

                        <div>
                            <ul>
                                <li className='border-t-[1px] py-2 px-3 bg-white border-primary text-primary font-medium flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='w-[25px]'><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path></svg>
                                Must be at least 18 years old.
                                </li>
                                <li className='border-t-[1px] py-2 px-3 bg-white border-primary text-primary font-medium flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='w-[25px]'><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path></svg>
                                Must have a valid ID and Social Security Number.
                                </li>
                                <li className='border-t-[1px] py-2 px-3 bg-white border-primary text-primary font-medium flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='w-[25px] font-bold'><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path></svg>
                                Must have a steady source of income.
                                </li>
                                <li className='border-t-[1px] py-2 px-3 bg-white border-primary text-primary font-medium flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='w-[25px]'><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path></svg>
                                Must have a checking account in your name.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Condition