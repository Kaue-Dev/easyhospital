export async function getEspecialidades(URL: string) {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}