"use client"

import { getMedicos } from "@/app/api/getMedicos";
import { getPacientes } from "@/app/api/getPacientes";
import { IConsultaData } from "@/app/interfaces/IConsultaData";
import { IMedico } from "@/app/interfaces/IMedico";
import { IPaciente } from "@/app/interfaces/IPaciente";
import { useEffect, useState } from "react";
import { URL } from "@/app/api/URL";
import { FormField } from "../components/FormField";
import { AgendarNovaConsuta } from "@/app/api/AgendarConsulta";
import { BotaoHome } from "@/app/components/BotaoHome";

export default function AgendarConsulta() {

  const [pacientes, setPacientes] = useState<IPaciente[]>([]);
  const [medicos, setMedicos] = useState<IMedico[]>([]);

  const [formValues, setFormValues] = useState<IConsultaData>({
    paciente_id: 0,
    medico_id: 0,
    data_hora: "",
    descricao: "",
  })

  useEffect(() => {
    getPacientes(`${URL}/pacientes`).then(data => setPacientes(data))
    getMedicos(`${URL}/medicos`).then(data => setMedicos(data))
  }, [])

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    AgendarNovaConsuta(`${URL}/consultas`, formValues);
    setFormValues({
      paciente_id: 0,
      medico_id: 0,
      data_hora: "",
      descricao: "",
    })
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-blue-950">
      <BotaoHome />
      <h1 className="text-center text-2xl font-bold mb-4 text-white">Agendar Consulta</h1>
      <form className="bg-white p-8 rounded-xl w-full max-w-2xl flex flex-col gap-8" onSubmit={handleSubmit}>
        <div className="flex justify-between gap-8">
          <div className="flex flex-col gap-1 w-full">
            <label className="text-blue-950 font-bold">Paciente</label>
            <select className="bg-blue-950 text-white py-2 px-4 rounded-lg" onChange={(e) => setFormValues({ ...formValues, paciente_id: parseInt(e.target.value) })} >
              <option value="">Selecione o Paciente</option>
              {pacientes.map(paciente => (
                <option key={paciente.id} value={paciente.id}>{paciente.nome}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label className="text-blue-950 font-bold">Médico</label>
            <select className="bg-blue-950 text-white py-2 px-4 rounded-lg" onChange={(e) => setFormValues({ ...formValues, medico_id: parseInt(e.target.value) })} >
              <option value="">Selecione o Médico</option>
              {medicos.map(medico => (
                <option key={medico.id} value={medico.id}>{medico.nome}</option>
              ))}
            </select>
          </div>
        </div>
        <FormField label="Data e Hora" type="datetime-local" value={formValues.data_hora} onChange={(e) => setFormValues({ ...formValues, data_hora: (e.target as HTMLInputElement).value })} />
        <FormField label="Descrição" type="text" value={formValues.descricao} onChange={(e) => setFormValues({ ...formValues, descricao: (e.target as HTMLInputElement).value })} />
        <button type="submit" className="bg-slate-300 rounded-lg mx-auto w-40 py-2 font-bold text-blue-950 text-lg">Agendar</button>
      </form>
    </div>
  )
}