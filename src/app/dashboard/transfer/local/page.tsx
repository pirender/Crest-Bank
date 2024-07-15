import TransferForm from '@/components/Transfer/Transfer'
import React from 'react'

const page = () => {
    return (
        <div className='pt-16 md:pt-0 md:pb-0 pb-[100px]'>
            <TransferForm type='Local' />
        </div>
    )
}

export default page