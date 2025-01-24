import { useState } from "react"

export function UseAccount() {
  const [isCreateAccount, setIsCreateAccount] = useState<boolean>(true)

  const toggle = () => {
    setIsCreateAccount(state => !state)
  }

  return { isCreateAccount, toggle }
}