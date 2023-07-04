import React from 'react'
import BalanceCard from './BalanceCard'
import TransactionCard from './TransactionCard'
import UtxoCard from './UtxoCard'

const AdressDataDisplay = () => {
  return (
    <div className='w-full bg-primary_black flex flex-col my-4 items-center'>
        <BalanceCard/>
        <TransactionCard/>
        <UtxoCard/>
    </div>
  )
}

export default AdressDataDisplay