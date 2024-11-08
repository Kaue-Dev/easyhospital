import { IPacienteData } from "../interfaces/IPacienteData";

export async function CadastrarNovoPaciente(URL: string, paciente: IPacienteData) {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(paciente),
  })

  if (response.ok) {
    console.log("Paciente cadastrado com sucesso!");
  }
}