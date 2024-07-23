import React from "react";
import Button from "../Button";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit, FaPlus } from "react-icons/fa";

const listaRemedios = [
  {
    nome: "Paracetamol",
    preço: 5.5,
    descrição: "Analgésico e antitérmico, indicado para alívio da dor e febre.",
    estoque: 100,
  },
  {
    nome: "Ibuprofeno",
    preço: 12.0,
    descrição:
      "Anti-inflamatório, analgésico e antitérmico, usado para alívio de dores e inflamações.",
    estoque: 80,
  },
  {
    nome: "Dipirona",
    preço: 6.0,
    descrição:
      "Analgésico e antitérmico, utilizado no tratamento de dores e febres.",
    estoque: 50,
  },
  {
    nome: "Amoxicilina",
    preço: 18.0,
    descrição: "Antibiótico usado para tratar diversas infecções bacterianas.",
    estoque: 30,
  },
  {
    nome: "Loratadina",
    preço: 7.5,
    descrição: "Antialérgico, utilizado no alívio dos sintomas de alergias.",
    estoque: 120,
  },
];

const Main = () => {
  return (
    <main className="flex items-center justify-center text-xl mt-20">
      <div className="border overflow-hidden w-3/4">
        <table className="text-zinc-100 border border-collapse border-zinc-100 w-full">
          <thead>
            <tr className="flex justify-around divide-white w-full">
              <th>Nome</th>
              <th> Preço</th>
              <th>Descrição</th>
              <th>Estoque</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody className="flex flex-col py-2 divide-y divide-white">
            {listaRemedios.map((remedio) => (
              <tr className="flex justify-around" key={remedio.nome}>
                <td className="w-32 text-center">{remedio.nome}</td>
                <td className="w-32 text-center">{remedio.preço.toFixed(2)}</td>
                <td className="w-60 text-center">{remedio.descrição}</td>
                <td className="w-32 text-center"> {remedio.estoque}</td>
                <td className="w-32 text-center">
                  <div className="flex flex-row rounded h-10 justify-between items-center border px-2 mx-0">
                    <Button className="text-blue-800">
                      <FaPlus />
                    </Button>
                    <Button className="text-zinc-100">
                      <FaEdit />
                    </Button>
                    <Button className="text-red-600">
                      <AiFillDelete />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Main;
