"use client"

import { useEffect, useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { getConsultas } from "./api/getConsultas";
import { IConsulta } from "./interfaces/IConsulta";
import { getPacientes } from "./api/getPacientes";
import { IPaciente } from "./interfaces/IPaciente";
import { TableHead } from "./components/TableHead";
import { TableHeadCell } from "./components/TableHeadCell";
import { TableBodyCell } from "./components/TableBodyCell";
import { URL } from "./api/URL";
import { IMedico } from "./interfaces/IMedico";
import { getMedicos } from "./api/getMedicos";
import { CalendarClock, Trash2 } from "lucide-react";
import { Deletar } from "./api/Deletar";
import { FormField } from "./pages/components/FormField";
import { Update } from "./api/Update";

export default function Home() {

  const [novaDataHora, setNovaDataHora] = useState<string>("");
  const [consultaId, setConsultaId] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);

  const [consultas, setConsultas] = useState<IConsulta[]>([]);
  const [pacientes, setPacientes] = useState<IPaciente[]>([]);
  const [medicos, setMedicos] = useState<IMedico[]>([]);

  useEffect(() => {
    getConsultas(`${URL}/consultas`).then(data => setConsultas(data))
    getPacientes(`${URL}/pacientes`).then(data => setPacientes(data))
    getMedicos(`${URL}/medicos`).then(data => setMedicos(data))
  }, [])

  function handleDeleteConsulta(id: number) {
    Deletar(`${URL}/consultas/${id}`).then(() => {
      setConsultas(consultas.filter(consulta => consulta.id !== id))
    })
  }

  function handleDeletePaciente(id: number) {
    Deletar(`${URL}/pacientes/${id}`).then(() => {
      setPacientes(pacientes.filter(paciente => paciente.id !== id))
    })
  }

  function handleDeleteMedico(id: number) {
    Deletar(`${URL}/medicos/${id}`).then(() => {
      setMedicos(medicos.filter(medico => medico.id !== id))
    })
  }

  function handleUpdateConsulta() {
    if (!consultaId || !novaDataHora) return
    setShowModal(false)
    setNovaDataHora("")
    Update(`${URL}/consultas/${consultaId}`, novaDataHora ).then(() => {
      getConsultas(`${URL}/consultas`).then(data => setConsultas(data))
    })
  }

  return (
    <div className="flex bg-blue-950">
      <Sidebar />
      <div className="w-full p-8 flex flex-col gap-8">
        <div>
          <h1 className="text-center text-2xl font-bold mb-4 text-white">Listagem de Consultas</h1>
          <div className="flex flex-col gap-4">
            <table className="table-auto w-full bg-white">
              <TableHead>
                <tr>
                  <TableHeadCell>ID</TableHeadCell>
                  <TableHeadCell>Paciente_ID</TableHeadCell>
                  <TableHeadCell>Médico_ID</TableHeadCell>
                  <TableHeadCell>Data e Hora</TableHeadCell>
                  <TableHeadCell>Descrição</TableHeadCell>
                  <TableHeadCell>Ações</TableHeadCell>
                </tr>
              </TableHead>
              <tbody>
                {consultas.map(consulta => (
                  <tr key={consulta.id}>
                    <TableBodyCell>{consulta.id}</TableBodyCell>
                    <TableBodyCell>{consulta.paciente_id}</TableBodyCell>
                    <TableBodyCell>{consulta.medico_id}</TableBodyCell>
                    <TableBodyCell>{consulta.data_hora}</TableBodyCell>
                    <TableBodyCell>{consulta.descricao}</TableBodyCell>
                    <TableBodyCell>
                      <div className="flex items-center justify-center gap-4">
                        <Trash2 className="text-red-600 cursor-pointer" onClick={() => handleDeleteConsulta(consulta.id)} />
                        <CalendarClock className="text-yellow-600 cursor-pointer" onClick={() => {
                          setConsultaId(consulta.id)
                          setShowModal(true)
                        }} />
                      </div>
                    </TableBodyCell>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h1 className="text-center text-2xl font-bold mb-4 text-white">Listagem de Pacientes</h1>
          <div className="flex flex-col gap-4">
            <table className="table-auto w-full bg-white">
              <TableHead>
                <tr>
                  <TableHeadCell>ID</TableHeadCell>
                  <TableHeadCell>CPF</TableHeadCell>
                  <TableHeadCell>Nome</TableHeadCell>
                  <TableHeadCell>Telefone</TableHeadCell>
                  <TableHeadCell>Celular</TableHeadCell>
                  <TableHeadCell>Convênio_ID</TableHeadCell>
                  <TableHeadCell>Ações</TableHeadCell>
                </tr>
              </TableHead>
              <tbody>
                {pacientes.map(paciente => (
                  <tr key={paciente.id}>
                    <TableBodyCell>{paciente.id}</TableBodyCell>
                    <TableBodyCell>{paciente.cpf}</TableBodyCell>
                    <TableBodyCell>{paciente.nome}</TableBodyCell>
                    <TableBodyCell>{paciente.telefone}</TableBodyCell>
                    <TableBodyCell>{paciente.celular}</TableBodyCell>
                    <TableBodyCell>{paciente.convenio_id}</TableBodyCell>
                    <TableBodyCell><Trash2 className="text-red-600 mx-auto cursor-pointer" onClick={() => handleDeletePaciente(paciente.id)} /></TableBodyCell>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h1 className="text-center text-2xl font-bold mb-4 text-white">Listagem de Médicos</h1>
          <div className="flex flex-col gap-4">
          <table className="table-auto w-full bg-white">
            <TableHead>
              <tr>
                <TableHeadCell>ID</TableHeadCell>
                <TableHeadCell>Nome</TableHeadCell>
                <TableHeadCell>CRM</TableHeadCell>
                <TableHeadCell>Telefone</TableHeadCell>
                <TableHeadCell>Celular</TableHeadCell>
                <TableHeadCell>Especialidade_ID</TableHeadCell>
                <TableHeadCell>Sexo</TableHeadCell>
                <TableHeadCell>Ações</TableHeadCell>
              </tr>
            </TableHead>
            <tbody>
              {medicos.map(medico => (
                <tr key={medico.id}>
                  <TableBodyCell>{medico.id}</TableBodyCell>
                  <TableBodyCell>{medico.nome}</TableBodyCell>
                  <TableBodyCell>{medico.crm}</TableBodyCell>
                  <TableBodyCell>{medico.telefone}</TableBodyCell>
                  <TableBodyCell>{medico.celular}</TableBodyCell>
                  <TableBodyCell>{medico.especialidade_id}</TableBodyCell>
                  <TableBodyCell>{medico.sexo}</TableBodyCell>
                  <TableBodyCell><Trash2 className="text-red-600 mx-auto cursor-pointer" onClick={() => handleDeleteMedico(medico.id)} /></TableBodyCell>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="absolute bg-black/50 w-full min-h-screen flex items-center justify-center">
          <div className="bg-white px-8 py-4 shadow-lg rounded-lg flex flex-col items-center gap-4">
            <FormField label="Informe a nova Data/Hora" type="datetime-local" value={novaDataHora} onChange={(ev) => setNovaDataHora((ev.target as HTMLInputElement).value)} />
            <button className="bg-blue-950 text-white w-40 py-2 rounded-lg" onClick={handleUpdateConsulta}>Confirmar</button>
          </div>
      </div>
      )}
    </div>
  );
}