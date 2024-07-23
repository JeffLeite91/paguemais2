import React, { Children } from "react";

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <header className=" rounded p-3 w-full fixed bg-blue-800">
      <nav className="flex items-center gap-10">
        {title}
        <a href="#">
          <img
            className="size-20 rounded-full"
            src="src/imagens/logo-paguemais.png"
            alt=""
          />
        </a>
        <a
          className="text-zinc-100 font-semibold text-lg cursor-pointer hover:text-red-600"
          href="#"
        >
          Home
        </a>
        <a
          className="text-zinc-100 font-semibold text-lg cursor-pointer  hover:text-red-600"
          href="#"
        >
          Produtos
        </a>
      </nav>
    </header>
  );
};

export default Header;
