import { IMedicoData } from "../interfaces/IMedicoData";

export async function CadastrarNovoMedico(URL: string, medico: IMedicoData) {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(medico)
  });

  if (response.ok) {
    console.log("Médico cadastrado com sucesso!");
    
  }
}