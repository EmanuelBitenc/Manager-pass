import Header from "./components/header";
import ParticipantesList from "./components/participantesList";

const App = () => {
  return (
    <div className="max-w-[1216px] mx-auto py-5 bg-zinc-900 text-gray-300 ">
      <Header />
      <ParticipantesList />
    </div>
  );
};

export default App;
