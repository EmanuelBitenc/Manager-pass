import { Search } from "lucide-react";

const ParticipantesList = () => {
  return (
    <div className="container">
      <div className=" flex gap-5 items-center mb-3">
        <h1 className="text-3xl">Participantes</h1>
        <div className="border border-white/40 rounded-lg px-2 py-1 text-sm w-72 flex items-center gap-2 ">
          <Search className="size-4 " />
          <input
            type="text"
            placeholder="Buscar Inscritos"
            className="bg-transparent flex-1 outline-none"
          />
        </div>
      </div>
      <div className="border border-white/10 rounded-lg ">
        <table className="w-full ">
          <thead>
            <tr className="border-b border-white/10">
              <th className="th-table ">
                <input type="checkbox" name="" id="" />
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
                <tr className="border-b border-white/10">
                  <td className="td-table">
                    <input type="checkbox" name="" id="" />
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
                  <td className="td-table"> button</td>
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
                Página 1 de 23
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ParticipantesList;
