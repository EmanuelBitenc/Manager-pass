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
//import FakeData from "../../data/fakedata";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/pt-br";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

interface ParticipanteProps {
  pesquisa: string | null;
  setPesquisa: Dispatch<SetStateAction<string | null>>;
  pagina: number | null;
  setPagina: Dispatch<React.SetStateAction<number>>;

  setPaginaAtual: (page: number) => void;
}
interface ParticipanteDATA {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  checkedInAt: string | null;
}

const ParticipanteListTable = (props: ParticipanteProps) => {
  const [participantes, setParticipantes] = useState<ParticipanteDATA[]>([]);
  const [total, setTotal] = useState(0);

  const totalPaginas = Math.ceil(total / 10);

  const proximaPagina = () => {
    if (props.pagina) {
      props.setPaginaAtual(props.pagina + 1);
    }
  };
  const paginaAnterior = () => {
    if (props.pagina) {
      props.setPaginaAtual(props.pagina - 1);
    }
  };
  const primeiraPagina = () => {
    props.setPaginaAtual(1);
  };

  const ultimaPagina = () => {
    props.setPaginaAtual(totalPaginas);
  };

  useEffect(() => {
    const url = new URL(
      "http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees"
    );

    if (props.pagina) {
      url.searchParams.set("pageIndex", String(props.pagina - 1));
    }
    if (props.pesquisa && props.pesquisa.length > 1) {
      url.searchParams.set("query", props.pesquisa);
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setParticipantes(data.attendees);
        setTotal(data.total);
      });
  }, [props.pagina, props.pesquisa]);

  return (
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
        {participantes.map((data) => {
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
                  <span className="font-semibold text-white">{data.name}</span>
                  <span>{data.email}</span>
                </div>
              </TableContent>
              <TableContent>{dayjs().to(data.createdAt)}</TableContent>
              <TableContent>
                {data.checkedInAt ? (
                  <span className="text-zinc-400">Não fez check-in</span>
                ) : (
                  dayjs().to(data.checkedInAt)
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
          <TableContent className="py-3 px-4 text-sm text-zinc-300" colSpan={3}>
            Mostrando {participantes.length} de {total}
          </TableContent>
          <TableContent className="text-right" colSpan={3}>
            <div className="inline-flex gap-3 items-center">
              <span>
                Página {props.pagina} de {totalPaginas}
              </span>
              <div className="flex gap-1 items-center">
                <IconButton
                  onClick={primeiraPagina}
                  disabled={props.pagina === 1}
                >
                  <ChevronsLeft className="size-5" />
                </IconButton>
                <IconButton
                  onClick={paginaAnterior}
                  disabled={props.pagina === 1}
                >
                  <ChevronLeft className="size-5" />
                </IconButton>
                <IconButton
                  onClick={proximaPagina}
                  disabled={props.pagina === totalPaginas}
                >
                  <ChevronRight className="size-5" />
                </IconButton>
                <IconButton
                  onClick={ultimaPagina}
                  disabled={props.pagina === totalPaginas}
                >
                  <ChevronsRight className="size-5" />
                </IconButton>
              </div>
            </div>
          </TableContent>
        </tr>
      </tfoot>
    </Table>
  );
};

export default ParticipanteListTable;
