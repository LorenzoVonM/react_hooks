import { useState } from "react"

export default function DarkMode() {

  const [darkMode, setDarkMode] =  useState(false);

  const toogleTheme = () => {
    setDarkMode(!darkMode)
  }

  return [darkMode, toogleTheme]
}