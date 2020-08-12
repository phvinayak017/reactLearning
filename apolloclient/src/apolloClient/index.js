import { ApolloClient, InMemoryCache } from '@apollo/client'

const getClient = () => {
  const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache(),
  })

  return client
}

export default getClient
