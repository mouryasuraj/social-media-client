import LoginBanner from "../components/LoginBanner"
import LoginForm from "../components/LoginForm"


const Login = () => {
  return (
    <>
      {/* Login Banner */}
      <div className="flex items-center justify-between gap-10 p-10 min-h-screen">
        <LoginBanner />
        <LoginForm />
      </div>
    </>
  )
}

export default Login