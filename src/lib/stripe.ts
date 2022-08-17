export function throwResponseError(response: any) {
  if (response.error) throw response.error;
  else return response;
}
