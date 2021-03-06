import React from 'react'
import styled from 'styled-components/native'

export default function Home() {
    const Holder = styled.View`
        flex: 1;
        background: ${(props) => props.theme.background};
        align-items: center;
        justify-content: center;
    `

    const Text = styled.Text`
        color: ${(props) => props.theme.text};
    `

    return (
        <Holder>
            <Text>This is a home page!</Text>
        </Holder>
    )
}

const options = {
    headerShown: false,
}

export { options }
