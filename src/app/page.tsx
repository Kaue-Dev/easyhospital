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

export default function Home() {

  const [consultas, setConsultas] = useState<IConsulta[]>([]);
  const [pacientes, setPacientes] = useState<IPaciente[]>([]);
  const [medicos, setMedicos] = useState<IMedico[]>([]);

  useEffect(() => {
    getConsultas(`${URL}/consultas`).then(data => setConsultas(data))
    getPacientes(`${URL}/pacientes`).then(data => setPacientes(data))
    getMedicos(`${URL}/medicos`).then(data => setMedicos(data))
  }, [])

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
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
}