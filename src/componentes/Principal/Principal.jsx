import React from "react";
import BotaoContador from "../BotaoContador/BotaoContador";
import BotaoCustomizado from "../BotaoCustomizado/BotaoCustomizado";
import Formulario from "../Formulario/Formulario";
import ListaCompras from "../ListaCompras/ListaCompras";
import ListaProdutos from "../ListaProdutos/ListaProdutos";
import "./Principal.css";

const Principal = () => {
  const [exemplo, setExemplo] = React.useState("");

  return (
    <main>
      <nav>
        <BotaoCustomizado tipo="primario" onClick={() => setExemplo("listaProdutos")}>
          ListaProdutos
        </BotaoCustomizado>
        <BotaoCustomizado tipo="secundario" onClick={() => setExemplo("botaoContador")}>
          BotaoContador
        </BotaoCustomizado>
        <BotaoCustomizado tipo="" onClick={() => setExemplo("formulario")}>
          Formulário
        </BotaoCustomizado>
        <BotaoCustomizado tipo="primario" onClick={() => setExemplo("listaCompras")}>
          Lista Compras
        </BotaoCustomizado>
      </nav>

      {exemplo === "listaProdutos" && <ListaProdutos />}
      {exemplo === "botaoContador" && <BotaoContador />}
      {exemplo === "formulario" && <Formulario />}
      {exemplo === "listaCompras" && <ListaCompras />}
    </main>
  );
};

export default Principal;
