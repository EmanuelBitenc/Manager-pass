import { Search } from "lucide-react";
import ParticipanteListTable from "./participanteListTable";
import { useState } from "react";

const ParticipantesList = () => {
  const [pagina, setPagina] = useState(1);

  return (
    <div className="container">
      <div className=" flex gap-8 items-center  my-4">
        <h1 className="text-3xl">Participantes</h1>
        <div className="border border-white/40 rounded-lg px-2 py-2  text-sm w-72 flex items-center gap-2 ">
          <Search className="size-4 " />
          <input
            type="text"
            placeholder="Buscar Inscritos"
            className=" bg-transparent border-none  flex-1 outline-none "
          />
        </div>
      </div>
      <ParticipanteListTable pagina={pagina} setPagina={setPagina} />
    </div>
  );
};

export default ParticipantesList;
