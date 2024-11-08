"use client"

import { IMedicoData } from "@/app/interfaces/IMedicoData";
import { useEffect, useState } from "react";
import { FormField } from "../components/FormField";
import { IEspecialidade } from "@/app/interfaces/IEspecialidade";
import { getEspecialidades } from "@/app/api/getEspecialidades";
import { URL } from "@/app/api/URL";
import { CadastrarNovoMedico } from "@/app/api/CadastrarMedico";
import { BotaoHome } from "@/app/components/BotaoHome";

export default function CadastrarMedico() {

  const [especialidades, setEspecialidades] = useState<IEspecialidade[]>([]);

  useEffect(() => {
    getEspecialidades(`${URL}/especialidades`).then(data => setEspecialidades(data))
  })

  const [formValues, setFormValues] = useState<IMedicoData>({
    nome: "",
    crm: "",
    telefone: "",
    celular: "",
    especialidade_id: 0,
    sexo: "",
    usuario: "usuario",
    senha: "senha",
  });

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    CadastrarNovoMedico(`${URL}/medicos`, formValues);
    setFormValues({
      nome: "",
      crm: "",
      telefone: "",
      celular: "",
      especialidade_id: 0,
      sexo: "",
      usuario: "usuario",
      senha: "senha",
    })
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-blue-950">
      <BotaoHome />
      <h1 className="text-center text-2xl font-bold mb-4 text-white">Cadastrar Médico</h1>
      <form className="bg-white p-8 rounded-xl w-full max-w-2xl flex flex-col gap-8" onSubmit={handleSubmit}>
        <div className="flex justify-between gap-8">
          <FormField label="Nome" type="text" value={formValues.nome} onChange={(e) => setFormValues({ ...formValues, nome: (e.target as HTMLInputElement).value })} />
          <FormField label="Telefone" type="text" value={formValues.telefone} onChange={(e) => setFormValues({ ...formValues, telefone: (e.target as HTMLInputElement).value })} />
        </div>
        <div className="flex justify-between gap-8">
          <FormField label="CRM" type="text" value={formValues.crm} onChange={(e) => setFormValues({ ...formValues, crm: (e.target as HTMLInputElement).value })} />
          <FormField label="Celular" type="text" value={formValues.celular} onChange={(e) => setFormValues({ ...formValues, celular: (e.target as HTMLInputElement).value })} />
        </div>
        <div className="flex justify-between gap-8">
          <div className="flex flex-col gap-1 w-full">
            <label className="text-blue-950 font-bold">Sexo</label>
            <select className="bg-blue-950 text-white py-2 px-4 rounded-lg" onChange={(e) => setFormValues({ ...formValues, sexo: (e.target as HTMLSelectElement).value })}>
              <option value="">Selecione o Sexo</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </select>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label className="text-blue-950 font-bold">Especilidade</label>
            <select className="bg-blue-950 text-white py-2 px-4 rounded-lg" onChange={(e) => setFormValues({ ...formValues, especialidade_id: parseInt(e.target.value) })}>
              <option value="">Selecione a Especialidade</option>
              {especialidades.map(especialidade => (
                <option key={especialidade.id} value={especialidade.id}>{especialidade.descricao}</option>
              ))}
            </select>
          </div>
        </div>
        <button type="submit" className="bg-slate-300 rounded-lg mx-auto w-40 py-2 font-bold text-blue-950 text-lg">Salvar</button>
      </form>
    </div>
  )
}