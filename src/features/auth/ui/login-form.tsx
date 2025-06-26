import { Form } from "@/shared/ui/form/form"
import { LoginSchema } from "../model/schema/login.schema"
import { useLogin } from "../model/hooks/login.hook"
import { Button, Input } from "@/shared/ui";
import { Link } from "@tanstack/react-router";

export const LoginForm = () => {
  const { onSubmit, isLoading } = useLogin();

  return (
    <div>
      <Form onSubmit={(d) => onSubmit(d)} schema={LoginSchema}>
        {({ register, formState }) => (
          <>
            <Input
              id={"email"}
              name={"email"}
              type={"email"}
              label={"Эл. Почта"}
              variant={"gray"}
              register={register('email')}
              error={formState.errors['email']}
              placeholder={"example@gmail.com"}
              required
            />
            <Input
              id={"password"}
              name={"password"}
              type={"password"}
              label={"Пароль"}
              variant={"gray"}
              register={register('password')}
              error={formState.errors['password']}
              required
            />
            <div>
              <Button isLoading={isLoading} type="submit">Войти</Button>
            </div>
            
          </>
        )}
      </Form>
      <div className="mt-3 flex items-center justify-center">
        <div className="text-[13px]">
          <span>У вас нет учетной записи?</span>
          <Link
            to={"/register"}
            className="font-medium ml-1.5 text-yellow-10 hover:text-yellow-9 hover:underline duration-200"
          >
            Зарегестрироваться
          </Link>
        </div>
      </div>
    </div>
  )
}
