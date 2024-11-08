export async function getMedicos(URL: string) {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}