import icon from "../../assets/Logo.svg";
import NavLink from "./nav-link";

const Header = () => {
  return (
    <div className="container mb-5 ">
      <nav className=" py-1 ">
        <ul className="flex gap-5 items-center justify-between font-medium ">
          <li>
            <a href="https://www.linkedin.com/in/emanuelbitencourt/">
              <img src={icon} />
            </a>
          </li>
          <li className="text-white text-3xl cursor-default font-google ">
            Manager Pass
          </li>
          <div className="flex gap-5 items-center  ">
            <NavLink href="/eventos" checked={false}>
              Eventos
            </NavLink>
            <NavLink href="/participantes" checked={true}>
              Participantes
            </NavLink>
          </div>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
