import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const auth0ClientId =
  process.env.REACT_APP_AUTH0_CLIENT_ID || "c5kZTxtEpzxJrVS1Pjm6hmUF5GkQ84rS";
const auth0Domain =
  process.env.REACT_APP_AUTH0_DOMAIN || "medvizor.us.auth0.com";

const MiAuth0Provider = ({ children }) => {
  const history = useHistory();

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={auth0Domain}
      clientId={auth0ClientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audience="hasura"
    >
      {children}
    </Auth0Provider>
  );
};

export default MiAuth0Provider;
