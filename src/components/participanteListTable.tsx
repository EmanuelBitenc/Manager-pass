import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
} from "lucide-react";

const ParticipanteListTable = () => {
  return (
    <div className="border border-white/10 rounded-lg ">
      <table className="w-full ">
        <thead>
          <tr className="border-b border-white/10">
            <th className="th-table ">
              <input
                className="size-4 bg-black/20 border border-white/20 rounded-sm"
                type="checkbox"
              />
            </th>
            <th className="th-table">Código</th>
            <th className="th-table">Participante</th>
            <th className="th-table">Data Inscrição</th>
            <th className="th-table">Data do Check-in</th>
            <th className="th-table"></th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map(() => {
            return (
              <tr className="border-b border-white/10 hover:bg-white/5">
                <td style={{ width: 48 }} className="td-table">
                  <input
                    className="size-4 bg-black/20 border border-white/20 rounded-sm"
                    type="checkbox"
                  />
                </td>
                <td className="td-table">12345</td>
                <td className="td-table">
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">
                      Emanuel Bintencourt
                    </span>
                    <span>emanuelmagalhaes3m@gmail.com</span>
                  </div>
                </td>
                <td className="td-table">7 dias atrás</td>
                <td className="td-table">3 dias atrás</td>
                <td style={{ width: 64 }} className="td-table">
                  <button className="border border-white/10 rounded-lg p-1">
                    <MoreHorizontal className="size-5" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td className="td-table" colSpan={3}>
              Mostrando 10 de 228 itens
            </td>
            <td className="td-table text-right" colSpan={3}>
              <div className="inline-flex gap-3 items-center">
                <span>Página 1 de 23</span>
                <div className="flex gap-1 items-center">
                  <button className="border bg-white/10 border-white/10 rounded-lg p-1">
                    <ChevronsLeft className="size-5" />
                  </button>
                  <button className="border bg-white/10 border-white/10 rounded-lg p-1">
                    <ChevronLeft className="size-5" />
                  </button>
                  <button className="border bg-white/10 border-white/10 rounded-lg p-1">
                    <ChevronRight className="size-5" />
                  </button>
                  <button className="border bg-white/10 border-white/10 rounded-lg p-1">
                    <ChevronsRight className="size-5" />
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ParticipanteListTable;
