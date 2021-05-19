import React from 'react'
import styled from 'styled-components/native'
import { StatusBar } from 'expo-status-bar'

const Holder = styled.View`
    flex: 1;
    background: #222;
    align-items: center;
    justify-content: center;
`

const Text = styled.Text`
    color: white;
`

export default function Home() {
    return (
        <Holder>
            <StatusBar style="light" />
            <Text>Open up App.tsx to start working on your app!</Text>
        </Holder>
    )
}

const options = {
    headerStyle: {
        backgroundColor: '#111',
    },
    headerTintColor: '#fff',
}

export { options }
