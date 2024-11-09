export async function Deletar(URL: string) {
  const response = await fetch(URL, {
    method: 'DELETE',
  })

  if (response.ok) {
    console.log('Deletado com sucesso!')
  }
}