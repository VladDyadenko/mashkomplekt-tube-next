import * as yup from "yup";

const loginFormSchema = yup.object().shape({
  email: yup.string().email("Невалідна пошта").required("Пошта обов'язкова"),
  password: yup
    .string()
    .min(6, "Довжина пароля не меньше 6 символів")
    .required("Пароль обов'язковий"),
});

export default loginFormSchema;
