import { BsSliders } from "react-icons/bs";
import { CustomHr, FilterClineBtn } from "./Filter.styled";
import FilterSelect from "../FilterSelect/FilterSelect";

const Filter = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl items-center">Фільтри</h2>
        <BsSliders />
      </div>
      <FilterClineBtn variant="outlined">Очистити фільтр</FilterClineBtn>
      <CustomHr />
    </>
  );
};

export default Filter;
