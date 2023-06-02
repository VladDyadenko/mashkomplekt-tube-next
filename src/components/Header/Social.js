import { AiFillLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";

const Social = ({ display }) => {
  return (
    <>
      <ul
        className={`items-center flex  gap-3 ${!display && "sm:hidden"} ${
          display ? "mt-[100px]  justify-center gap-3" : "flex  justify-start "
        }`}
      >
        <div className="hover:bg-[#747878] p-2 rounded">
          <li className="text-white mb-3 hover:scale-105 p-1">
            <a href="mailto:mashcomplektinfo@gmail.com">
              mashkomplekt@gmail.com
            </a>
          </li>
          <li className="text-white hover:scale-105 p-1">
            <a href="tel:+380673334455">+380673334455</a>
          </li>
        </div>
        {/* <div>
          <li>
            <a
              href="#"
              className={`${
                display
                  ? "flex items-center justify-center text-3xl mb-5 text-white hover:scale-105"
                  : "flex items-center justify-start text-xl text-white hover:scale-105"
              }`}
            >
              <AiFillLinkedin className="fill-white mr-2" />
              <span>linkedin</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`${
                display
                  ? "flex items-center justify-center text-3xl text-white hover:scale-105"
                  : "flex items-center justify-start text-xl text-white hover:scale-105"
              }`}
            >
              <VscGithub className="fill-white mr-2" />
              <span className="">Github</span>
            </a>
          </li>
        </div> */}
      </ul>
    </>
  );
};

export default Social;
