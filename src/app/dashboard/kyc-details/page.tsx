import React from 'react'
import KycPending from '@/components/Dashboard/KycPending'
import KYC from '@/components/Kyc/KycDetails'
import { auth } from '../../../../auth'

const page = async () => {
  const session = await auth()

  return (
    <div>
      {session?.user.kyc_pending === 'YES' ? <div className=' pt-16 md:pt-0 '><KycPending /></div> : <div>
        <KYC />
      </div>}

    </div>
  )
}

export default page