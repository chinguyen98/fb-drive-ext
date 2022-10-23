export type RequestAccessTokenApiResponse = {
  access_token: string;
  account_id: number;
  account_username: string;
  expires_in: number;
  refresh_token: number;
  scope: null | any;
  token_type: string;
};
