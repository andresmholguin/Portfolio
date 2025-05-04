// import logoDark from "./../../assets/Logo_Rwplex_dark.svg";
import logoLight from "./../../assets/Logo_Rwplex_ligth.svg";

const Nav = () => {
  return (
    <nav className=" bg-transparent flex justify-between items-center w-full px-40 text-Text h-16 z-10">
      <img src={logoLight} alt="Logo" className="h-12 scale-150" />
      <ul className="flex items-center space-x-8 ">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li className="rounded-sm font-bold px-6 py-2 cursor-pointer -ml-2 bg-Secundary">
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
