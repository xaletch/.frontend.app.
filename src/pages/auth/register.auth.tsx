import { RegisterForm } from "@/features/auth"
import { AuthLayout } from "@/widgets"

export const Register = () => {
  return (
    <AuthLayout title={"Создайте аккаунт"}>
      <RegisterForm />
    </AuthLayout>
  )
}
