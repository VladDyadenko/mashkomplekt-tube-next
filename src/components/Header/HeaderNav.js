import Link from "next/link";
import { useRouter } from "next/router";
import Social from "./Social";

export const navLink = [
  { name: "Про нас", path: "/" },
  { name: "Труби", path: "/tube" },
  { name: "Калькулятор", path: "/calculator" },
  { name: "Контакти", path: "/contacts" },
  { name: "Статті", path: "/articles" },
];

const HeaderNav = () => {
  const router = useRouter();
  return (
    <>
      <header className="fixed top-0 left-0 w-full">
        {/* <div className="flex justify-center items-statr bg-gradient-to-b from-[#07ede1] from-50%  to-[#FFFF00] to-50% h-[60px] w-full">
          <p className=" text-center text-blue text-2xl">Все буде Україна!</p>
        </div> */}

        <div className=" px-[30px] flex justify-between items-center bg-hero w-full h-[100px]">
          <nav className="flex justify- items-center">
            <Link className="" href={"/"}>
              <p className="logo-text text-[#2196f3] font-raleway font-medium mr-[100px] text-3xl">
                Машкомплект
              </p>
            </Link>

            <ul className="flex ">
              {navLink.map(({ name, path }) => (
                <li
                  className="hover:bg-[#747878] rounded mr-5 p-3 flex justify-center items-center"
                  key={path}
                >
                  <Link
                    className={` relative ${
                      router.pathname === path
                        ? "after:scale-100 text-white "
                        : "text-white"
                    }  after:transition-transform 
                   after:absolute after:scale-0 after:h-[1px]
                   after:w-full after:left-0 after:-bottom-0 after:bg-white
                    text-center text-xl  font-medium hover:scale-105`}
                    href={path}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Social />
        </div>
      </header>
    </>
  );
};

export default HeaderNav;
