import Link from "next/link"

export const Sidebar = () => {
  return (
    <aside className="flex flex-col p-4 gap-4 w-96 min-h-screen bg-white">
      <Link href="/pages/cadastrar-paciente" className="bg-blue-950 text-white text-xl py-2 pl-3 pr-8 rounded-lg w-full">Cadastrar Paciente</Link>
      <Link href="/pages/cadastrar-medico" className="bg-blue-950 text-white text-xl py-2 pl-3 pr-8 rounded-lg w-full">Cadastrar Médico</Link>
      <Link href="/pages/agendar-consulta" className="bg-blue-950 text-white text-xl py-2 pl-3 pr-8 rounded-lg w-full">Agendar Consulta</Link>
    </aside>
  )
}
