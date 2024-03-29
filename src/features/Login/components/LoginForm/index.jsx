// material ui

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

// react hook form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// yup
import * as yup from "yup";

import LoginFormField from "./LoginFormField";
import PrimaryButton from "../../../../components/PrimaryButton";
import ToastMessage from "../../../../components/ToastMessage";

import "./styles.scss";
import { Checkbox } from "@mui/material";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("This field is required")
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "This is not valid email format"
    ),
  password: yup
    .string()
    .required("This field is required")
    .matches(
      /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
      "Password should be 8 chars minimum and at least 1 number"
    ),
});

function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onHandleSubmit = () => {
    reset({
      email: "",
      password: "",
    });

    ToastMessage("closed");
  };

  return (
    <form onSubmit={handleSubmit(onHandleSubmit)} className="form-login">
      <LoginFormField
        icon={<MailOutlineIcon />}
        name="email"
        label="Email address"
        placeholder="Your email"
        register={register}
        errors={errors}
      />

      <LoginFormField
        icon={<LockOutlinedIcon />}
        name="password"
        label="Password"
        placeholder="Your password"
        register={register}
        errors={errors}
      />

      <div className="form-login__commit">
        <Checkbox color="primary" className="form-login__commit-checkbox" />
        <span className="form-login__commit-msg">Save your password</span>
      </div>

      <div className="form-login__btn">
        <PrimaryButton subClass="red form-login__btn" type="submit">
          Log in
        </PrimaryButton>
      </div>
    </form>
  );
}

export default LoginForm;
