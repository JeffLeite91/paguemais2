import React from "react";

const Main = () => {
  return (
    <main className="flex items-end text-xl justify-around">
      <table className="text-zinc-100 border border-collapse border-zinc-100 border-solid w-3/4 flex flex-col  ">
        <thead className="flex gap-4 justify-around">
          <th>Nome</th>
          <th>Preço</th>
          <th>Descrição</th>
          <th>Estoque</th>
        </thead>
        <tbody>
          <tr className="flex justify-around">
            <td>Dipirona</td>
            <td>12,50</td>
            <td>Remedio para dor de cabeça</td>
            <td>Qtd. 200</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default Main;
