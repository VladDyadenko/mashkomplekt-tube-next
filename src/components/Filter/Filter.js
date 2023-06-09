import { BsSliders } from "react-icons/bs";
import { FilterClineBtn } from "./Filter.styled";
import FilterSelect from "../FilterSelect/FilterSelect";
import { useRouter } from "next/router";

const Filter = () => {
  const router = useRouter();
  console.log(router);
  const pipes = [
    { diameter: "10", wallThickness: "1", steelGrade: "20" },
    { diameter: "15", wallThickness: "1,5", steelGrade: "20XГСА" },
    { diameter: "20", wallThickness: "2,0", steelGrade: "10" },
    { diameter: "30", wallThickness: "3,0", steelGrade: "09Г2С" },
    { diameter: "40", wallThickness: "4,0", steelGrade: "40X" },
    { diameter: "50", wallThickness: "5,0", steelGrade: "35" },
    { diameter: "60", wallThickness: "11,0", steelGrade: "45" },
  ];
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
