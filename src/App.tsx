import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

const Holder = styled.View`
    flex: 1;
    background: #fff;
    align-items: center;
    justify-content: center;
`

export default function App() {
    return (
        <Holder>
            <Text>Open up App.tsx to start working on your app!</Text>
        </Holder>
    )
}
