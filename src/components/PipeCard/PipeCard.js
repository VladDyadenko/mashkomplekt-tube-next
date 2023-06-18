import Image from "next/image";
import ImagePipes from "../../assets/images/pipes-2.png";
import { Box, Button, Paper, Typography } from "@mui/material";
import Counter from "../Counter/Counter";
import Link from "next/link";

const PipeCard = ({ pipe }) => {
  return (
    <Paper className="py-2">
      <article className="flex flex-col w-full py-2">
        <Box className="px-2 py-1">
          <Typography
            variant="p"
            className="text-start px-1 text-[18px] font-medium  "
          >
            Трубa
          </Typography>
          <Typography
            variant="p"
            className="text-start px-1 text-lg font-medium "
          >
            {pipe.diameter} мм х {pipe.wallThickness} мм
          </Typography>
        </Box>

        <Image
          priority={true}
          src={ImagePipes}
          alt="Picture tubes"
          className="w-full h-auto block rounded mb-2"
        />
        <Typography className="px-2 my-1" variant="p">
          <a href="#">На складі</a>
        </Typography>

        <Counter pipe={pipe} />
      </article>
      <Button
        className="ml-[10%]  w-[80%] mt-10 bg-inherit border border-solid border-[#ed1c24] hover:bg-[#ed1c24] hover:text-white text-[#ed1c24] "
        variant="contained"
        href="#contained-buttons"
      >
        Купити
      </Button>
    </Paper>
  );
};
export default PipeCard;
