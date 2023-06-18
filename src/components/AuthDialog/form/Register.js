import { Button, TextField, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Register({ setFormType }) {
  return (
    <>
      <Button
        variant="text"
        onClick={() => setFormType("main")}
        sx={{
          fontFamily: "Roboto Slab",
          fontWeight: 400,
          fontSize: 16,
          textTransform: "none",
          color: "#1976d2",
          "&:hover": {
            color: "#074079",
          },
        }}
      >
        <ArrowBackIcon className="mr-2" />
        Назад
      </Button>
      <Typography className="mb-2 font-robotoSlab font-medium text-textColor">
        Реєстрація:
      </Typography>
      <form className="flex flex-col gap-3">
        <TextField label="Name" size="small" variant="outlined" required />
        <TextField label="email" size="small" variant="outlined" required />
        <TextField label="password" size="small" variant="outlined" required />
        <Button
          className="text-4 normal-case bg-[#1976d2] hover:bg-[#074079]"
          color="primary"
          type="submit"
          variant="contained"
        >
          Зареєструватися
        </Button>
        <Button
          variant="text"
          onClick={() => setFormType("login")}
          sx={{
            fontFamily: "Roboto Slab",
            fontWeight: 400,
            fontSize: 16,
            textTransform: "none",
            color: "#1976d2",
            "&:hover": {
              color: "#074079",
            },
          }}
        >
          Вже зареєстровані? <ArrowForwardIcon className="ml-2" />{" "}
        </Button>
      </form>
    </>
  );
}

export default Register;
