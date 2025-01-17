/* eslint-disable react/prop-types */
import { useState } from 'react'

export function UseGeneral () {
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false)

  const toggleOffCanvas = () => {
    setIsOffCanvasOpen((prevState) => !prevState)
  }

  const closeOffCanvas = () => {
    setIsOffCanvasOpen(false)
  }

  return { isOffCanvasOpen, toggleOffCanvas, closeOffCanvas }
}
