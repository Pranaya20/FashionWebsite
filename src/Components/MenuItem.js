import {menu} from "../Utils/Constant";

export default function Menubar() {
  return (
    <nav className="w-[35%] hidden lg:block">
      <ul className="menus flex list-none ">
        {menu.map((item, key) => {
          return (
            <li className="menu-items  relative px-5 py-2 text-[#131212] font-semibold cursor-pointer hover:text-[#167B95] ">
              {item.name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
