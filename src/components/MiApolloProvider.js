import React from "react";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useAuth0 } from "@auth0/auth0-react";

const hasuraUri =
  process.env.REACT_APP_HASURA_URI ||
  "https://trusted-silkworm-58.hasura.app/v1/graphql";

const httpLink = createHttpLink({ uri: hasuraUri });

const MiApolloProvider = ({ children, ...rest }) => {
  const { getAccessTokenSilently, isAuthenticated, isLoading } = useAuth0();

  const authLink = setContext(async () => {
    const token = await getAccessTokenSilently();

    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  });

  const apolloClient = new ApolloClient({
    link: isAuthenticated ? authLink.concat(httpLink) : httpLink,
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return (
    !isLoading && (
      <ApolloProvider client={apolloClient} {...rest}>
        {children}
      </ApolloProvider>
    )
  );
};

export default MiApolloProvider;
