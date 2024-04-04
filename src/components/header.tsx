import icon from "../assets/Logo.svg";

const Header = () => {
  return (
    <div className="container mb-5 ">
      <nav className=" py-1 ">
        <ul className="flex gap-5 items-center font-medium ">
          <li>
            <a href="https://www.linkedin.com/in/emanuelbitencourt/">
              <img src={icon} />
            </a>
          </li>
          <a href="">
            <li className="text-zinc-400">Eventos</li>
          </a>
          <a href="">
            <li>Participantes</li>
          </a>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
