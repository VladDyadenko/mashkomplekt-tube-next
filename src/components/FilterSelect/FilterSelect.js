"use client";

import { useState } from "react";
import { CustomHr } from "../Filter/Filter.styled";
import { Checkbox } from "@mui/material";

const FilterSelect = ({ pipes }) => {
  const [form, setForm] = useState({});
  console.log(form);

  const handleCheckbox = (e, field, size) => {
    const { target } = e;
    const value = target.checked;

    setForm((prevForm) => {
      const updatedForm = { ...prevForm, [field]: size };
      if (!value) {
        delete updatedForm[field];
      }
      return updatedForm;
    });
  };

  return (
    <>
      <CustomHr />
      <div className="mb-4">
        <p className="font-robotoSlab font-medium  mb-3">Діаметр</p>
        <ul className="relative max-h-[150px] overflow-y-auto">
          {pipes.map((pipe, index) => (
            <li key={index}>
              <label className="flex items-center py-1 font-robotoSlab font-medium">
                <Checkbox
                  // checked={checked}
                  name={pipe.diameter}
                  onChange={(e) =>
                    handleCheckbox(e, "wallThickness", pipe.diameter)
                  }
                  inputProps={{ "aria-label": "controlled" }}
                  className="mr-2"
                />
                {/* <span className="checkbox block relative mr-4 mb-0 h-4 w-4 z-50 cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox__input"
                    name={pipe.diameter}
                    onChange={(e) =>
                      handleCheckbox(e, "diameter", pipe.diameter)
                    }
                  />
                  <span className="checkbox__placeholder block absolute w-4 h-4 rounded border border-solid border-[#818a8f]" />
                </span> */}
                {pipe.diameter}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <CustomHr />
      <div className="mb-4">
        <p className="font-robotoSlab font-medium mb-3">Товщина стінки</p>
        <ul className="relative max-h-[150px] overflow-y-auto">
          {pipes.map((pipe, index) => (
            <li key={index}>
              <label className="flex items-center py-1 font-robotoSlab font-medium ">
                <Checkbox
                  // checked={checked}
                  name={pipe.wallThickness}
                  onChange={(e) =>
                    handleCheckbox(e, "wallThickness", pipe.wallThickness)
                  }
                  inputProps={{ "aria-label": "controlled" }}
                  className="mr-2"
                />
                {/* <span className="checkbox block relative mr-4 mb-0 h-4 w-4 z-50 cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox__input"
                    name={pipe.wallThickness}
                    onChange={(e) =>
                      handleCheckbox(e, "wallThickness", pipe.wallThickness)
                    }
                  />
                  <span className="checkbox__placeholder block absolute w-4 h-4 rounded border border-solid border-[#818a8f]" />
                </span> */}
                {pipe.wallThickness}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <CustomHr />
      <div className="mb-4">
        <p className="font-robotoSlab font-medium  mb-3">Марка сталі</p>
        <ul className="relative max-h-[150px] overflow-y-auto">
          {pipes.map((pipe, index) => (
            <li key={index}>
              <label className="flex items-center py-1 font-robotoSlab font-medium">
                <Checkbox
                  // checked={checked}
                  name={pipe.steelGrade}
                  onChange={(e) =>
                    handleCheckbox(e, "wallThickness", pipe.steelGrade)
                  }
                  inputProps={{ "aria-label": "controlled" }}
                  className="mr-2"
                />
                {/* <span className="checkbox block relative mr-4 mb-0 h-4 w-4 z-50 cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox__input"
                    name={pipe.steelGrade}
                    onChange={(e) =>
                      handleCheckbox(e, "steelGrade", pipe.steelGrade)
                    }
                  />
                  <span className="checkbox__placeholder block absolute w-4 h-4 rounded border border-solid border-[#818a8f]" />
                </span> */}
                {pipe.steelGrade}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FilterSelect;
