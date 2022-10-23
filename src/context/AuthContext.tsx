import { LOCAL_STORAGE_KEY } from 'appConstants';
import { useContext, createContext, ReactNode, useState, useEffect, Context } from 'react';

type ContextValueType = {
  accessToken?: string | null;
};

export const AuthContext: Context<ContextValueType> = createContext({});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    console.info('Check Access Token!123');

    chrome.storage.sync.get(LOCAL_STORAGE_KEY.ACCESS_TOKEN, (result) => {
      console.log({result})
      setAccessToken(result[LOCAL_STORAGE_KEY.ACCESS_TOKEN]);
    });

    chrome.storage.onChanged.addListener(function (changes, namespace) {
      for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
        console.log({key, oldValue, newValue, changes})
        if (key === LOCAL_STORAGE_KEY.ACCESS_TOKEN) {
          console.log({ oldValue, newValue });
          setAccessToken(newValue);
        }
      }
    });
  }, []);

  return <AuthContext.Provider value={{ accessToken }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
