'use client'
const KycPending = () => {
    return (
        <div className='md:pt-6 pt-6 pb-[600px] md:pb-0'>
            <div className="mycontainer md:hidden">
                <div className="px-4">
                    <div>
                        <div className='text-primary text-[14px] lg:text-[16px] bg-[#eaf1ff] p-3 rounded-lg border-[1px] border-primary'>
                            Alert! You've submitted your KYC and your account is currently under review.</div>
                    </div>
                </div>
            </div>
            <div className="hidden md:block">
                <div className="px-4">
                    <div>
                        <div className='text-primary text-[14px] lg:text-[16px] bg-[#eaf1ff] p-3 rounded-lg border-[1px] border-primary'>
                        Alert! You've submitted your KYC and your account is currently under review.</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default KycPending