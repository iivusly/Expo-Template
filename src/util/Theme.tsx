import React, { useEffect, useState, FunctionComponent } from 'react'
import {Themes} from '@root/config'
import { ThemeProvider } from 'styled-components/native'
import { StatusBar } from 'expo-status-bar'
import { Appearance } from 'react-native'



const ThemeHandler: FunctionComponent = ({ children }) => {
    const [Theme, setTheme] = useState(
        Appearance.getColorScheme() === 'dark' ? Themes.Dark : Themes.Light
    )

    useEffect(() => {
        Appearance.addChangeListener(({ colorScheme }) => {
            setTheme(colorScheme === 'dark' ? Themes.Dark : Themes.Light)
        })
    })

    return (
        <ThemeProvider theme={Theme}>
            <StatusBar style="auto" />
            {children}
        </ThemeProvider>
    )
}

export { ThemeHandler }
