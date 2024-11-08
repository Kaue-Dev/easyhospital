"use client"

import { getConvenios } from "@/app/api/getConvenios";
import { IConvenio } from "@/app/interfaces/IConvenio";
import { useEffect, useState } from "react";
import { FormField } from "../components/FormField";
import { IPacienteData } from "@/app/interfaces/IPacienteData";
import { CadastrarNovoPaciente } from "@/app/api/CadastrarPaciente";
import { URL } from "@/app/api/URL";
import { BotaoHome } from "@/app/components/BotaoHome";

export default function CadastrarPaciente() {

  const [convenios, setConvenios] = useState<IConvenio[]>([]);

  const [formValues, setFormValues] = useState<IPacienteData>({
    nome: "",
    telefone: "",
    cpf: "",
    celular: "",
    idade: 1,
    convenio_id: 0,
  });

  useEffect(() => {
    getConvenios(`${URL}/convenios`).then(data => setConvenios(data))
  }, [convenios])

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    CadastrarNovoPaciente(`${URL}/pacientes`, formValues);
    setFormValues({
      nome: "",
      telefone: "",
      cpf: "",
      celular: "",
      idade: 1,
      convenio_id: 0,
    })
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-blue-950">
      <BotaoHome />
      <h1 className="text-center text-2xl font-bold mb-4 text-white">Cadastrar Paciente</h1>
      <form className="bg-white p-8 rounded-xl w-full max-w-2xl flex flex-col gap-8" onSubmit={handleSubmit}>
        <div className="flex justify-between gap-8">
          <FormField label="Nome" type="text" value={formValues.nome} onChange={(e) => setFormValues({ ...formValues, nome: (e.target as HTMLInputElement).value })} />
          <FormField label="Telefone" type="text" value={formValues.telefone} onChange={(e) => setFormValues({ ...formValues, telefone: (e.target as HTMLInputElement).value })} />
        </div>
        <div className="flex justify-between gap-8">
          <FormField label="CPF" type="text" value={formValues.cpf} onChange={(e) => setFormValues({ ...formValues, cpf: (e.target as HTMLInputElement).value })} />
          <FormField label="Celular" type="text" value={formValues.celular} onChange={(e) => setFormValues({ ...formValues, celular: (e.target as HTMLInputElement).value })} />
        </div>
        <div className="flex justify-between gap-8">
          <FormField label="Idade" type="number" value={formValues.idade} onChange={(e) => setFormValues({ ...formValues, idade: parseInt((e.target as HTMLInputElement).value) })} />
          <div className="flex flex-col gap-1 w-full">
            <label className="text-blue-950 font-bold">Convenio</label>
            <select className="bg-blue-950 text-white py-2 px-4 rounded-lg" onChange={(e) => setFormValues({ ...formValues, convenio_id: parseInt((e.target as HTMLSelectElement).value) })}>
              <option value="">Selecione um convênio</option>
              {convenios.map(convenio => (
                <option key={convenio.id} value={convenio.id}>{convenio.nome}</option>
              ))}
            </select>
          </div>
        </div>
        <button type="submit" className="bg-slate-300 rounded-lg mx-auto w-40 py-2 font-bold text-blue-950 text-lg">Salvar</button>
      </form>
    </div>
  )
}