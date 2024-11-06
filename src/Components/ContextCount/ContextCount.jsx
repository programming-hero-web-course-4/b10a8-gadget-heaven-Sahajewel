import React, { useState } from 'react'
import { createContext } from 'react'

export const Money = createContext(0)
export default function ContextCount() {
    const [money, setMoney] = useState(0)
  return (
    <div>
      <Money.Provider value={[money, setMoney]}>

      </Money.Provider>
    </div>
  )
}
