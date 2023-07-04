import React from 'react'
import BalanceCard from './BalanceCard'
import TransactionCard from './TransactionCard'

const AdressDataDisplay = () => {
  return (
    <div className='w-full bg-primary_black flex flex-col my-4 items-center'>
        <BalanceCard/>
        <TransactionCard/>
    </div>
  )
}

export default AdressDataDisplay