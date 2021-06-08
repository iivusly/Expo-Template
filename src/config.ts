import { DefaultTheme } from 'styled-components/native'


const Themes = {
    Dark: {
        background: '#222',
        text: '#fff',
    },
    Light: {
        background: 'white',
        text: 'black',
    }
}

let GraphQLServer: string = 'localhost:3333/api'


export { Themes, GraphQLServer }