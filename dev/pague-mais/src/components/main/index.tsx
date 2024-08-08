import React from "react";
import Button from "../Button";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit, FaPlus } from "react-icons/fa";
import { Modal } from "../Modal/modal";

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
];

const Main = () => {
  return (
    <main className="flex items-center justify-center text-xl mt-20 flex-col">
       <Modal />
      <div className="overflow-hidden w-3/4">
        <table className="text-zinc-100 border border-collapse border-zinc-100 w-full">
          <thead>
            <tr className="flex justify-around divide-white w-full my-2">
              <th>Nome</th>
              <th> Preço</th>
              <th>Descrição</th>
              <th>Estoque</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody className="flex flex-col my-3 divide-y divide-white">
            {listaRemedios.map((remedio) => (
              <tr className="flex justify-around my-1" key={remedio.nome}>
                <td className="w-32 text-center my-2">{remedio.nome}</td>
                <td className="w-32 text-center my-2">
                  {remedio.preço.toFixed(2)}
                </td>
                <td className="w-60 text-center my-2">{remedio.descrição}</td>
                <td className="w-32 text-center my-2"> {remedio.estoque}</td>
                <td className="w-32 text-center my-2">
                  <div className="flex flex-row rounded h-10 justify-center items-center border gap-5 m-2 my-5">
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
