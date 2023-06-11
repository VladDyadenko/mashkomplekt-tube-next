import { useEffect, useState } from "react";
import { Container, ButtonGroup, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { StyledButton, StyledButtonGroup, StyledInput } from "./Counter.styled";
import RemoveIcon from "@mui/icons-material/Remove";

const Counter = ({ pipe }) => {
  const price = parseFloat(pipe.price.replace(",", "."));
  const weightOneMeter = parseFloat(pipe.weightOneMeter.replace(",", "."));

  const [count, setCount] = useState(1);
  const [unit, setUnit] = useState("кг");
  const [costsForUnit, setCostsForUnit] = useState(price / 1000);
  const [sum, setSum] = useState(costsForUnit * price * count);

  const handleChange = (event) => {
    setCount(Math.max(Number(event.target.value), 1));
  };

  const getcostsForUnit = () => {
    if (unit === "кг") {
      return price / 1000;
    }
    if (unit === "мп") {
      const calculatedValue = (price / 1000) * weightOneMeter;
      return calculatedValue.toFixed(2);
    }
    if (unit === "т") {
      return price;
    }
  };
  const getSumForPipe = () => {
    return costsForUnit * count;
  };
  useEffect(() => {
    const updatedCostsForUnit = getcostsForUnit();
    const updatedSum = getSumForPipe();

    setCostsForUnit(updatedCostsForUnit);
    setSum(updatedSum);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unit, price, weightOneMeter, count, costsForUnit]);

  return (
    <>
      <Container className="px-2 mt-1 mb-2">
        <Typography>
          <span className=" font-robotoSlab font-bold text-[#ed1c24] mr-1">
            {costsForUnit}
          </span>
          грн/
          <span className=" font-robotoSlab font-bold text-[#ed1c24]">
            {unit}
          </span>
        </Typography>
        <ButtonGroup
          className="h-6 m-0 "
          size="small"
          aria-label="small button group"
        >
          <Button
            onClick={() => {
              setUnit("кг");
            }}
            className={`${
              unit === "кг"
                ? "bg-[#5e7ba5]  text-white"
                : " bg-slate-200 text-textColor "
            } p-1 hover:text-white hover:border-[#7c8b9b] hover:bg-slate-400  border-none   text-[10px] `}
          >
            кг
          </Button>
          <Button
            onClick={() => setUnit("мп")}
            className={`${
              unit === "мп"
                ? "bg-[#5e7ba5]  text-white"
                : " bg-slate-200 text-textColor "
            } p-1 hover:text-white hover:border-[#7c8b9b] hover:bg-slate-400  border-none   text-[10px] `}
          >
            мп
          </Button>
          <Button
            onClick={() => setUnit("т")}
            className={`${
              unit === "т"
                ? "bg-[#5e7ba5]   text-white"
                : " bg-slate-200 text-textColor "
            }  p-1 hover:text-white hover:border-[#7c8b9b] hover:bg-slate-400 border-none    text-[10px] `}
          >
            т
          </Button>
        </ButtonGroup>
      </Container>
      <Container className="h-6 px-2">
        <ButtonGroup className="">
          <StyledButton
            onClick={() => setCount((prev) => prev - 1)}
            disabled={count === 1}
          >
            <RemoveIcon fontSize="small" />
          </StyledButton>
          <StyledInput
            className=""
            size="small"
            onChange={handleChange}
            value={count}
          />
          <StyledButton onClick={() => setCount((prev) => prev + 1)}>
            <AddIcon fontSize="small" />
          </StyledButton>
        </ButtonGroup>
        <Typography className="font-robotoSlab font-medium ">
          ВАРТІСТЬ:
          <span className="ml-1 font-robotoSlab font-bold text-[#ed1c24] mr-1">
            {sum}
          </span>
          грн.
        </Typography>
      </Container>
    </>
  );
};
export default Counter;
