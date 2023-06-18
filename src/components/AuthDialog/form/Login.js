import { Button, TextField, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email("Невірна пошта").required("Пошта обов'язкова"),
  password: yup
    .string()
    .min(6, "Довжина пароля мінімум 6 символів")
    .required("Пароль обов'язковий"),
});

function Login({ setFormType }) {
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Button
        variant="text"
        onClick={() => setFormType("register")}
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
        Вхід:
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <TextField
          {...register("email")}
          name="email"
          label="Пошта"
          size="small"
          variant="outlined"
          error={!!formState.errors.email?.message}
          helperText={formState.errors.email?.message}
          required
          fullWidth
        />

        <TextField
          {...register("password")}
          name="password"
          label="Пароль"
          type="password"
          size="small"
          variant="outlined"
          error={!!formState.errors.password?.message}
          helperText={formState.errors.password?.message}
          required
          fullWidth
        />

        <Button
          className="text-4 normal-case bg-[#1976d2] hover:bg-[#074079]"
          color="primary"
          type="submit"
          variant="contained"
        >
          Увійти
        </Button>
      </form>
    </>
  );
}

export default Login;
