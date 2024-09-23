import React, { useState } from 'react'
import useTheme from '../context/theme'

function ThemeButton() {

    const {themeMode, setThemeMode} = useTheme()

    const [isToggle, setIsToggle] = useState(false)

    const handleClick = () => {
        setIsToggle(!isToggle)
        themeMode === 'dark' ? setThemeMode('light') : setThemeMode('dark')
    }

    return (
        <div className='flex gap-2 items-center text-3xl font-bold '>
            <h1>Toggle Theme</h1>
            <div
                onClick={handleClick}
                className='relative w-16 h-10 bg-zinc-800 dark:bg-white rounded-full cursor-pointer transition-all'>
                <div className={`h-8 w-8 rounded-full bg-slate-400 dark:bg-zinc-900 absolute top-1 ${isToggle ? 'left-1' :'left-7'} transition-all `}>

                </div>
            </div>
        </div>
    )
}

export default ThemeButton