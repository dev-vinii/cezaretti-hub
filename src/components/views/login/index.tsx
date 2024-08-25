import { LoginForm } from "./login-form";

function Login() {
  return (
    <>
      <div className="flex h-screen w-screen flex-col-reverse">
        <div className="flex justify-center bg-[#dbdbcb] pb-20">
          <LoginForm />
        </div>
        <div className="bg-login-image flex-1 bg-cover bg-center" />
      </div>
    </>
  );
}

export { Login };
