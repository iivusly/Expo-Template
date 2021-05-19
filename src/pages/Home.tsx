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
            <Text>This is a home page!</Text>
        </Holder>
    )
}

const options = {
    headerShown: false,
}

export { options }
