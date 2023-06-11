"use client";

import { useState } from "react";
import { CustomHr } from "../Filter/Filter.styled";
import { Checkbox } from "@mui/material";

const FilterSelect = ({ pipes }) => {
  const [form, setForm] = useState({});
  const uniqueDiameter = [];
  const uniqueWallThicknesses = [];
  const uniqueSteelGrade = [];

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
          {pipes.map((pipe, index) => {
            if (!uniqueDiameter.includes(pipe.diameter)) {
              uniqueDiameter.push(pipe.diameter);

              return (
                <li key={index}>
                  <label className="flex items-center py-1 font-robotoSlab font-medium ">
                    <Checkbox
                      // checked={checked}
                      name={pipe.diameter}
                      onChange={(e) =>
                        handleCheckbox(e, "wallThickness", pipe.diameter)
                      }
                      inputProps={{ "aria-label": "controlled" }}
                      className="mr-2"
                    />
                    {pipe.diameter.toLocaleString(undefined, {
                      minimumFractionDigits: 1,
                    })}
                  </label>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
      <CustomHr />
      <div className="mb-4">
        <p className="font-robotoSlab font-medium mb-3">Товщина стінки</p>
        <ul className="relative max-h-[150px] overflow-y-auto">
          {pipes.map((pipe, index) => {
            if (!uniqueWallThicknesses.includes(pipe.wallThickness)) {
              uniqueWallThicknesses.push(pipe.wallThickness);

              return (
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
                    {pipe.wallThickness.toLocaleString(undefined, {
                      minimumFractionDigits: 1,
                    })}
                  </label>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
      <CustomHr />
      <div className="mb-4">
        <p className="font-robotoSlab font-medium  mb-3">Марка сталі</p>
        <ul className="relative max-h-[150px] overflow-y-auto">
          {pipes.map((pipe, index) => {
            if (!uniqueSteelGrade.includes(pipe.steelGrade)) {
              uniqueSteelGrade.push(pipe.steelGrade);

              return (
                <li key={index}>
                  <label className="flex items-center py-1 font-robotoSlab font-medium ">
                    <Checkbox
                      // checked={checked}
                      name={pipe.steelGrade}
                      onChange={(e) =>
                        handleCheckbox(e, "wallThickness", pipe.steelGrade)
                      }
                      inputProps={{ "aria-label": "controlled" }}
                      className="mr-2"
                    />
                    {pipe.steelGrade.toLocaleString(undefined, {
                      minimumFractionDigits: 1,
                    })}
                  </label>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </>
  );
};

export default FilterSelect;
