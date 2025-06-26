import { LoginForm } from "@/features/auth"
import { AuthLayout } from "@/widgets"

export const Login = () => {
  return (
    <AuthLayout 
      title={"Войдите в аккаунт"}
      // description={"Если у вас еще нет аккаунта, перейдите на страницу Регистрации и зарегистрируйтесь в один клик"}
    >
      <LoginForm />
    </AuthLayout>
  )
}
