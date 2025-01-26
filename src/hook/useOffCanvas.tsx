 
import { useState } from 'react'

export function useOffCanvas () {
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false)

  const toggleOffCanvas = () => {
    setIsOffCanvasOpen((prevState) => !prevState)
  }

  const closeOffCanvas = () => {
    setIsOffCanvasOpen(false)
  }

  return { isOffCanvasOpen, toggleOffCanvas, closeOffCanvas }
}
