import { useState } from 'react'
import { E_THEME } from '@/utils/enums/theme'

export function UseTheme () {
  const [theme, setTheme] = useState(E_THEME.lightMode)

  return { setTheme, theme }
}
