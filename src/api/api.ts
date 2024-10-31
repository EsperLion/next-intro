const API_URL = process.env.STRAPI_API_URL;

export function GET<T>(resource: string): Promise<T> {
  return fetch(`${API_URL}${resource}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .catch((err) => {
      console.log({ err });
      return err;
    });
}

export function POST<T>(resource: string, data: object): Promise<T> {
  return fetch(`${API_URL}${resource}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data }),
  })
    .then((response) => response.json())
    .catch((err) => {
      console.log({ err });
      return err;
    });
}
