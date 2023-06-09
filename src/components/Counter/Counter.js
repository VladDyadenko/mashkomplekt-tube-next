import { useState } from "react";
import { Container, ButtonGroup } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { StyledButton, StyledInput } from "./Counter.styled";
import RemoveIcon from "@mui/icons-material/Remove";

const Counter = () => {
  const [count, setCount] = useState(1);
  const handleChange = (event) => {
    setCount(Math.max(Number(event.target.value), 1));
  };
  return (
    <Container className="">
      <ButtonGroup className="">
        <StyledButton
          onClick={() => setCount((prev) => prev - 1)}
          disabled={count === 1}
        >
          <RemoveIcon fontSize="small" />
        </StyledButton>
        <StyledInput size="small" onChange={handleChange} value={count} />
        <StyledButton onClick={() => setCount((prev) => prev + 1)}>
          <AddIcon fontSize="small" />
        </StyledButton>
      </ButtonGroup>
    </Container>
  );
};
export default Counter;
