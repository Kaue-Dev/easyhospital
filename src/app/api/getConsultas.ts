import { IConsulta } from "../interfaces/IConsulta";

export async function getConsultas(URL: string) {
  const response = await fetch(URL);
  const data = await response.json();

  data.forEach((consulta: IConsulta) => {
    const date = new Date(consulta.data_hora);
    consulta.data_hora = date.toLocaleDateString() + " " + date.toLocaleTimeString();
  });
  
  return data;
}