import { useState } from "react"

export function UseAccount() {
  const [isCreateAccount, setIsCreateAccount] = useState<boolean>(false)

  const toggle = () => {
    setIsCreateAccount(state => !state)
  }

  return { isCreateAccount, toggle }
}