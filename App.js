import React from 'react'
import Navigation from './Navigation'
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client'

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
})

export default function App() {
    return (
        <ApolloProvider client={client}>
            <Navigation />
        </ApolloProvider>
    )
}
