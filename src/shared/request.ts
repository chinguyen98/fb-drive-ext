import { API_URL, CLIENT_ID } from 'config';

const baseRequest = async ({
  subUrl,
  method,
  params,
  body,
  isAuth,
}: {
  subUrl: string;
  method: string;
  params?: Record<string, string>;
  body?: Record<string, any>;
  isAuth?: boolean;
}) => {
  const paramsStr = new URLSearchParams(params);

  let formData: FormData = new FormData();
  if (body && Object.keys(body).length > 0) {
    Object.entries(body!).forEach(([key, value]) => {
      formData.append(key, value);
    });
  }

  const authorizationHeader = isAuth ? `Client-ID ${CLIENT_ID}` : ``;

  const response = await fetch(`${API_URL}/${subUrl}?${paramsStr}`, {
    method,
    body: formData,
    headers: {
      Authorization: authorizationHeader,
    },
  })
    .then((response) => response.json())
    .then((result) => result);
  return response;
};

export default baseRequest;
