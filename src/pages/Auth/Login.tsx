import { useState, Fragment } from "react";
import { LoadingOverlay } from "@mantine/core";
import Logo from "../../assets/svgs/PROJECT-X.svg";
import Xicon from "../../assets/svgs/close.svg";
import { Input } from "../../components/ui/input";
import { PasswordInput } from "../../components/ui/PasswordInput";
import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = () => {
    setLoading(true)
    setTimeout(() => {
      localStorage.setItem("troo_token", "token")
      setLoading(false)
      navigate("/overview")
    }, 5000)
  }
  return (
    <Fragment>
      <LoadingOverlay visible={loading} />
    <div className="flex h-screen w-full justify-center items-center bg-gray-200">
      <div className="relative max-w-[517px] w-full mx-auto text-center bg-white p-10 flex flex-col justify-center items-center">
        <img src={Logo} alt="Project X" />
        <img src={Xicon} alt="close" className="absolute right-10 top-10" />
        <div className="mt-10 font-medium">Welcome back</div>
        <div className="mt-2">
          Please, enter your login details to continue on Project-X
        </div>
        <form className="mt-10 w-full">
          <Input
            className="w-full"
            placeholder="Business Email"
          />
          <PasswordInput
            className="w-full mt-6"
            placeholder="Enter your password"
          />
          <div className="flex justify-end text-xs font-medium mt-2 cursor-pointer text-primary">
            Forgot Password?
          </div>
          <Button className="bg-primary w-full rounded-full mt-8"
          onClick={handleLogin}>
            Sign in
          </Button>
          <div className="text-center text-xs font-medium mt-5 cursor-pointer text-primary">
            Don’t have an account on Project-X? Sign up
          </div>
        </form>
      </div>
      </div>
    </Fragment>
  );
};

export default Login;
