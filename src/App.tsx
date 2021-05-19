import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

// Update Pages here
import * as Home from './pages/Home'

const Pages = {
    Home,
}

const Stack = createStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {Object.entries(Pages).map((Page) => {
                    return (
                        <Stack.Screen
                            name={Page[0]}
                            component={Page[1].default}
                            options={Page[1].options ? Page[1].options : {}}
                        />
                    )
                })}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
