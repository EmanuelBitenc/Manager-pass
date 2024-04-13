import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
} from "lucide-react";
import IconButton from "./icon-button";
import Table from "./Table/table";
import TableHeader from "./Table/table-header";
import TableContent from "./Table/table-content";
import TableRow from "./Table/tableRow";
import FakeData from "../../data/fakedata";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/pt-br";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

interface ParticipanteDATA {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  checkedInAt: string | null;
}
const ParticipantesList = () => {
  const [participantes, setParticipantes] = useState<ParticipanteDATA[]>([]);
  const [total, setTotal] = useState(0);

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
    url.searchParams.set("search", pesquisa);
    setPaginaAtual(1);
    window.history.pushState({}, "", url.toString());
    if (setPesquisa) {
      setPesquisa(pesquisa);
    }
  };

  const totalPaginas = Math.ceil(total / 10);

  const proximaPagina = () => {
    if (pagina) {
      // setPaginaAtual(pagina + 1);
      setPagina(pagina + 1);
    }
  };
  const paginaAnterior = () => {
    if (pagina) {
      //  setPaginaAtual(pagina - 1);
      setPagina(pagina - 1);
    }
  };
  const primeiraPagina = () => {
    //  setPaginaAtual(1);
    setPagina(1);
  };

  const ultimaPagina = () => {
    // setPaginaAtual(totalPaginas);
    setPagina(totalPaginas);
  };

  const [fetchData] = useState(false);

  useEffect(() => {
    if (fetchData) {
      const url = new URL(
        "http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendeesX" //Remova o X
      );

      if (pagina) {
        url.searchParams.set("pageIndex", String(pagina - 1));
      }
      if (pesquisa && pesquisa.length > 1) {
        url.searchParams.set("query", pesquisa);
      }

      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setParticipantes(data.attendees);
          setTotal(data.total);
        })
        .catch((error) => {
          console.error("Error:", error);
          const filteredFakeData = FakeData.filter((participante) =>
            participante.name
              .toLowerCase()
              .includes(pesquisa?.toLowerCase() ?? "")
          );
          setParticipantes(filteredFakeData);
          setTotal(filteredFakeData.length);
        });
    } else {
      const filteredFakeData = FakeData.filter((participante) =>
        participante.name.toLowerCase().includes(pesquisa?.toLowerCase() ?? "")
      );
      setParticipantes(filteredFakeData);
      setTotal(filteredFakeData.length);
    }
  }, [pagina, pesquisa, fetchData]);
  const valorItens = participantes.slice((pagina - 1) * 9, pagina * 9).length;
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
      <Table>
        <thead>
          <tr className="border-b border-white/10">
            <th className="th-table ">
              <input
                className="size-4 bg-black/20 border border-white/20 rounded-sm"
                type="checkbox"
              />
            </th>
            <TableHeader>Código</TableHeader>
            <TableHeader>Participante</TableHeader>
            <TableHeader>Data Inscrição</TableHeader>
            <TableHeader>Data do Check-in</TableHeader>
            <TableHeader style={{ width: 64 }}></TableHeader>
          </tr>
        </thead>
        <tbody>
          {participantes.slice((pagina - 1) * 9, pagina * 9).map((data) => {
            return (
              <TableRow key={data.id}>
                <TableContent style={{ width: 48 }}>
                  <input
                    className="size-4 bg-black/20 border border-white/20 rounded-sm"
                    type="checkbox"
                  />
                </TableContent>
                <TableContent>{data.id}</TableContent>
                <TableContent>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">
                      {data.name}
                    </span>
                    <span>{data.email}</span>
                  </div>
                </TableContent>
                <TableContent>{dayjs().to(data.createdAt)}</TableContent>
                <TableContent>
                  {data.checkedInAt ? (
                    dayjs().to(data.checkedInAt)
                  ) : (
                    <span className="text-zinc-400">Não fez check-in</span>
                  )}
                </TableContent>
                <TableContent style={{ width: 64 }}>
                  <IconButton transparent>
                    <MoreHorizontal className="size-5" />
                  </IconButton>
                </TableContent>
              </TableRow>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <TableContent
              className="py-3 px-4 text-sm text-zinc-300"
              colSpan={3}
            >
              Mostrando {valorItens} de {total}
            </TableContent>
            <TableContent className="text-right" colSpan={3}>
              <div className="inline-flex gap-3 items-center">
                <span>
                  Página {pagina} de {totalPaginas}
                </span>
                <div className="flex gap-1 items-center">
                  <IconButton onClick={primeiraPagina} disabled={pagina === 1}>
                    <ChevronsLeft className="size-5" />
                  </IconButton>
                  <IconButton onClick={paginaAnterior} disabled={pagina === 1}>
                    <ChevronLeft className="size-5" />
                  </IconButton>
                  <IconButton
                    onClick={proximaPagina}
                    disabled={pagina === totalPaginas}
                  >
                    <ChevronRight className="size-5" />
                  </IconButton>
                  <IconButton
                    onClick={ultimaPagina}
                    disabled={pagina === totalPaginas}
                  >
                    <ChevronsRight className="size-5" />
                  </IconButton>
                </div>
              </div>
            </TableContent>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
};

export default ParticipantesList;
