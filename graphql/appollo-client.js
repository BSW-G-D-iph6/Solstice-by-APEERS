import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
    return new ApolloClient({
        uri: "http://localhost:8080/graphiql",
        cache: new InMemoryCache(),
    });
};

export default createApolloClient;