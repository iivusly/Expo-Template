import React, { useEffect, useState, FunctionComponent } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components/native'
import { Appearance } from 'react-native'


const Dark: DefaultTheme = {
    background: '#222',
    text: '#fff',
}

const Light: DefaultTheme = {
    background: 'white',
    text: 'black',
}

const ThemeHandler: FunctionComponent = ({ children }) => {
    const [Theme, setTheme] = useState(
        Appearance.getColorScheme() === 'dark' ? Dark : Light
    )

    useEffect(() => {
        Appearance.addChangeListener(({ colorScheme }) => {
            setTheme(colorScheme === 'dark' ? Dark : Light)
        })
    }, [Appearance])
    return <ThemeProvider theme={Theme}>{children}</ThemeProvider>
}

export { ThemeHandler }