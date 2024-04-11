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
import { Dispatch, SetStateAction } from "react";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

interface ParticipanteProps {
  pagina: number;
  setPagina: Dispatch<SetStateAction<number>>;
}

const ParticipanteListTable = (props: ParticipanteProps) => {
  const totalPaginas = Math.round(FakeData.length / 10);

  const proximaPagina = () => {
    if (props.pagina == totalPaginas) {
      return;
    }
    props.setPagina(props.pagina + 1);
  };
  const paginaAnterior = () => {
    if (props.pagina == 1) {
      return;
    }
    props.setPagina(props.pagina - 1);
  };
  const primeiraPagina = () => {
    props.setPagina(1);
  };

  const ultimaPagina = () => {
    props.setPagina(totalPaginas);
  };

  const itensPagina = FakeData.slice(
    (props.pagina - 1) * 10,
    props.pagina * 10
  );

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
        {itensPagina.map((data) => {
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
                  <span className="font-semibold text-white">{data.nome}</span>
                  <span>{data.email}</span>
                </div>
              </TableContent>
              <TableContent>{dayjs().to(data.inscricaoData)}</TableContent>
              <TableContent>{dayjs().to(data.checkinData)}</TableContent>
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
            Mostrando {itensPagina.length} de {FakeData.length}
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
