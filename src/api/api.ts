const API_URL = process.env.STRAPI_API_URL;

export function GET<T>(resource: string): Promise<T> {
  return fetch(`${API_URL}${resource}`)
    .then((response) => response.json())
    .then((data: { data: T; meta: any }) => data.data)
    .catch((err) => {
      console.log({ err });
      return err;
    });
}
