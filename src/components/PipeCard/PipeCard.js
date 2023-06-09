import Image from "next/image";
import ImagePipes from "../../assets/images/tube-2-1280.jpg";
import { Paper, Typography } from "@mui/material";
import Counter from "../Counter/Counter";

const PipeCard = () => {
  return (
    <Paper className="h-[450px]">
      <article className="flex flex-col w-full h-full py-2">
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
          ф 100 мм х 12,0 мм
        </Typography>

        <Image
          priority={true}
          src={ImagePipes}
          alt="Picture tubes"
          className="w-full h-auto block rounded mb-2"
        />
        <Counter />
      </article>
    </Paper>
  );
};
export default PipeCard;
