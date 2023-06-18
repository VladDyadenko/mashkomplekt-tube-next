import { Button, DialogContentText, Typography } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import EmailIcon from "@mui/icons-material/Email";

function Main({ setFormType }) {
  return (
    <>
      <Typography className="mb-2 font-robotoSlab font-medium text-textColor">
        Вхід в кабінет:
      </Typography>
      <DialogContentText>
        <Button
          sx={{
            position: "relative",
            color: "#2a2a2a",
            "&:hover": {
              color: "#fff",
            },
          }}
          fullWidth
          className="text-textColor mb-4"
          variant="contained"
        >
          <FcGoogle className="h-5 w-5  absolute left-1" />
          Google
        </Button>
        <Button
          sx={{
            position: "relative",
            color: "#2a2a2a",
            "&:hover": {
              color: "#fff",
            },
          }}
          fullWidth
          className="text-textColor mb-4"
          variant="contained"
          onClick={() => setFormType("register")}
        >
          <EmailIcon className="h-5 w-5  absolute left-1" />
          Пошта
        </Button>
      </DialogContentText>
    </>
  );
}

export default Main;
