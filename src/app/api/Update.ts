export async function Update(URL: string, data_hora: string) {
  const response = await fetch(URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ data_hora })
  })
  
  if (response.ok) {
    console.log("Atualizado com sucesso")
  }
}