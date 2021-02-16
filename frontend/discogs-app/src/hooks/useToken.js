import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function useToken(callback) {
  const [token, setToken] = useState(null);
  const { getAccessTokenSilently } = useAuth0();
  const getToken = async () => {
    const domain = "devcat.eu.auth0.com";
    try {
      const accessToken = await getAccessTokenSilently({
        audience: `https://${domain}/api/v2/`,
        scope: "read:current_user",
      });
      setToken(["token", accessToken]);
      callback(accessToken);
      console.log(accessToken);
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    getToken();
  }, []);
  return token;
}

export default useToken;
