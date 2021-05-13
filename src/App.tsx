import React from "react";
import styled from "styled-components/native";

const Holder = styled.View`
  flex: 1;
  background: #222;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  color: white;
`

export default function App() {
  return (
    <Holder>
      <Text>Open up App.tsx to start working on your app!</Text>
    </Holder>
  );
}
