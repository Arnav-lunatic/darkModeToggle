import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import Card from './components/Card'
import ThemeButton from './components/ThemeButton'

function App() {
  const [themeMode, setThemeMode] = useState('light')

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, setThemeMode }}>
      <div className='bg-white dark:bg-zinc-800 min-h-dvh w-full text-black dark:text-white'>
        <div className='flex gap-8 flex-col justify-center items-center p-40'>
          <ThemeButton />
          <Card />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
