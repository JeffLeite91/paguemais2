import React, { useState } from "react";

export const Modal = () => {
  const [openModal, setOpenModal] = useState(false);
  const modal = () => {
    setOpenModal(!openModal);
  };

  return (
    <> 
        <div className="border-zinc-100">
    <button
        className="flex justify-end items-end border border-zinc-100 my-5 rounded p-2 bg-blue-500 text-zinc-100 font-semibold"
        onClick={modal}
      >
        Adicionar item
      </button>
      {openModal && (
        <div className="bg-blue-800 p-8 mb-4 rounded flex flex-col items-center justify-center fixed">
          <input
            className="flex text-center my-2"
            type="text"
            placeholder="Digite novo item"
          />
          <input
            className="flex text-center my-2"
            type="number"
            placeholder="Digite o preço"
          />
          <input
            className="flex text-center my-2 h-14"
            type="text"
            placeholder="Descrição"
          />
          <input
            className="flex text-center my-2"
            type="text"
            placeholder="Qtd. estoque"
          />
          <div className="flex flex-row gap-5 my-2">
            <button className="bg-blue-200 font-bold text-blue-800 rounded p-1">
              Salvar
            </button>
            <button
              className="bg-red-500 font-bold text-zinc-100 rounded p-1"
              onClick={modal}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

    </div>
     
    </>
  );
};
