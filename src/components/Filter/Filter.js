import { BsSliders } from "react-icons/bs";
import { FilterClineBtn } from "./Filter.styled";
import FilterSelect from "../FilterSelect/FilterSelect";
import { useRouter } from "next/router";
import { pipes } from "../../assets/constants/pipes";

const Filter = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl items-center">Фільтри</h2>
        <BsSliders />
      </div>
      <FilterClineBtn
        className="xs:text-[8px] sm:text-[10px]"
        variant="outlined"
      >
        Очистити фільтр
      </FilterClineBtn>
      <FilterSelect pipes={pipes} />
    </>
  );
};

export default Filter;
