import { Search } from "lucide-react";
import ParticipanteListTable from "./participanteListTable";
import { useState } from "react";

const ParticipantesList = () => {
  const [pagina, setPagina] = useState(() => {
    const url = new URL(window.location.toString());

    if (url.searchParams.has("page")) {
      return Number(url.searchParams.get("page"));
    }

    return 1;
  });

  const setPaginaAtual = (page: number) => {
    const url = new URL(window.location.toString());
    url.searchParams.set("page", String(page));

    window.history.pushState({}, "", url);
    setPagina(page);
  };

  const [pesquisa, setPesquisa] = useState(() => {
    const url = new URL(window.location.toString());
    if (url.searchParams.has("search")) {
      setPaginaAtual(1);
      return url.searchParams.get("search");
    }

    return "";
  });

  const setPesquisaAtual = (pesquisa: string) => {
    const url = new URL(window.location.toString());
    setPagina(1);
    url.searchParams.set("search", pesquisa);
    window.history.pushState({}, "", url.toString());
    if (setPesquisa) {
      setPesquisa(pesquisa);
    }
  };

  return (
    <div className="container">
      <div className=" flex gap-8 items-center  my-2">
        <h1 className="text-3xl">Participantes</h1>
        <div className="border border-white/40 rounded-lg px-2 py-2  text-sm w-72 flex items-center gap-2 ">
          <Search className="size-4 " />
          <input
            type="text"
            value={pesquisa ?? ""}
            placeholder="Buscar Inscritos"
            className=" bg-transparent border-none  flex-1 outline-none "
            onChange={(e) => setPesquisaAtual(e.target.value)}
          />
        </div>
      </div>
      <ParticipanteListTable
        pesquisa={pesquisa}
        setPesquisa={setPesquisa}
        pagina={pagina}
        setPagina={setPagina}
        setPaginaAtual={setPaginaAtual}
      />
    </div>
  );
};

export default ParticipantesList;
