import { useId } from "react"
import React from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyoptions = ['eur', 'pkr', 'aud','jpy','gbp','inr','usd', 'cad','cny', 'chf'],
    selectedCurrency = "usd",
    currencyDisabled = false,
    amountDisabled = false,
    className = ""
})
 {

  const id = useId()

  return (
    <div className={` bg-white p-3 rounded-lg text-sm flex
        ${className}`}>

            <div className='w-1/2'>

                <label htmlFor={id} className='text-black/40 mb-2 inline-block'>
                {label}</label>
                <input 
                type="number"
                id={id}
                className='outline-none w-full bg-transparent py-1.5'
                disabled={amountDisabled}
                placeholder='Amount'
                value={amount}
                onChange={(e) => onAmountChange
                (Number(e.target.value))}
                 />

            </div>
            
            <div className='w-1/2 flex flex-wrap justify-end text-right'>

            <p className='text-black/40 mb-2 w-full'>
            Currency Type</p>
            <select 
            className='rounded-lg px-1 py-1 outline-none cursor-pointer bg-gray-100'
            value={selectedCurrency}
            onChange={(e) =>  onCurrencyChange(e.target.value)}
            disabled={currencyDisabled}
            >
              {currencyoptions.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
              
            </select>

            </div>
        </div>
  )
}

export default InputBox