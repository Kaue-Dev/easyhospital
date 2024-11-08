import { IConsultaData } from "../interfaces/IConsultaData";

export async function AgendarNovaConsuta(URL: string, formValues: IConsultaData) {
  console.log(formValues);
  
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formValues)
  })
  
  if (response.ok) {
    console.log("Consulta Agendada com Sucesso");
  }
}