import React from 'react'
import Navigation from './Navigation'
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client'

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
})

//Revisar para enviar el Token, setear en la conexión con Apollo

export default function App() {
    return (
        <ApolloProvider client={client}>
            <Navigation />
        </ApolloProvider>
    )
}
