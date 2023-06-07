import { CustomHr } from "../Filter/Filter.styled";

const diametrs = ["10", "15", "20", "30", "40", "50", "60"];
const walls = ["1", "1,5", "2,0", "3,0", "4,0", "5,0", "6,0"];
const grades = ["20", "20XГСА", "10", "09Г2С", "40X", "35", "40Ш"];

const FilterSelect2 = () => {
  return (
    <>
      <CustomHr />
      <div className="mb-4">
        <p className="font-robotoSlab font-normal text-[16px] mb-3">Діаметр</p>
        <ul className="relative max-h-[150px] overflow-y-auto">
          {diametrs.map((diametr) => (
            <li key={diametr}>
              <label className="flex items-center py-1 font-robotoSlab font-normal text-[14px]">
                <span className="checkbox block relative mr-4 mb-0 h-4 w-4 z-50 cursor-pointer">
                  <input type="checkbox" className="checkbox__input" />
                  <span className="checkbox__placeholder block absolute w-4 h-4 rounded border border-solid border-[#818a8f]" />
                </span>
                {diametr}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <CustomHr />
      <div className="mb-4">
        <p className="font-robotoSlab font-normal text-[16px] mb-3">
          Товщина стінки
        </p>
        <ul className="relative max-h-[150px] overflow-y-auto">
          {walls.map((wall) => (
            <li key={wall}>
              <label className="flex items-center py-1 font-robotoSlab font-normal text-[14px]">
                <span className="checkbox block relative mr-4 mb-0 h-4 w-4 z-50 cursor-pointer">
                  <input type="checkbox" className="checkbox__input" />
                  <span className="checkbox__placeholder block absolute w-4 h-4 rounded border border-solid border-[#818a8f]" />
                </span>
                {wall}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <CustomHr />
      <div className="mb-4">
        <p className="font-robotoSlab font-normal text-[16px] mb-3">
          Марка сталі
        </p>
        <ul className="relative max-h-[150px] overflow-y-auto">
          {grades.map((grade) => (
            <li key={grade}>
              <label className="flex items-center py-1 font-robotoSlab font-normal text-[14px]">
                <span className="checkbox block relative mr-4 mb-0 h-4 w-4 z-50 cursor-pointer">
                  <input type="checkbox" className="checkbox__input" />
                  <span className="checkbox__placeholder block absolute w-4 h-4 rounded border border-solid border-[#818a8f]" />
                </span>
                {grade}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FilterSelect2;
