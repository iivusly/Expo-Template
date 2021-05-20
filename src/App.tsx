import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {ThemeHandler} from './Theme'

// Update Pages here
import * as Home from './pages/Home'

const Pages = {
    Home,
}

const Stack = createStackNavigator()

export default function App() {
    return (
        <ThemeHandler>
            <NavigationContainer>
                <Stack.Navigator>
                    {Object.entries(Pages).map((Page) => {
                        return (
                            <Stack.Screen
                                key={Page[0]}
                                name={Page[0]}
                                component={Page[1].default}
                                options={Page[1].options ? Page[1].options : {}}
                            />
                        )
                    })}
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeHandler>
    )
}
