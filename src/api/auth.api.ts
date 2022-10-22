import baseRequest from 'shared/request';
import { CLIENT_ID, CLIENT_SECRET, REQUEST_TOKEN } from 'config';

const prefix = 'oauth2';

export const authorizationApi = () => {
  return baseRequest({
    subUrl: `${prefix}/authorize`,
    method: 'GET',
    params: {
      client_id: CLIENT_ID!,
      response_type: 'token',
    },
  });
};

export const requestAccessTokenApi = () => {
  return baseRequest({
    subUrl: `${prefix}/token`,
    method: 'POST',
    body: {
      client_id: CLIENT_ID!,
      refresh_token: REQUEST_TOKEN!,
      client_secret: CLIENT_SECRET!,
      grant_type: 'refresh_token',
    },
    isAuth: true,
  });
};
