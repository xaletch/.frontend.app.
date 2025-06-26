import { Form } from "@/shared/ui/form/form"
import { Button, Input } from "@/shared/ui";
import { Link } from "@tanstack/react-router";
import { useRegister } from "../model/hooks/register.hook";
import { RegisterSchema } from "../model/schema/register.schema";

export const RegisterForm = () => {
  const { onSubmit, isLoading } = useRegister();

  return (
    <div>
      <Form onSubmit={(d) => onSubmit(d)} schema={RegisterSchema}>
        {({ register, formState }) => (
          <>
            <Input
              id={"name"}
              name={"name"}
              type={"text"}
              label={"Имя"}
              variant={"gray"}
              register={register('name')}
              error={formState.errors['name']}
              placeholder={"Иван"}
              required
            />
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
              label={"Придумайте пароль"}
              variant={"gray"}
              register={register('password')}
              error={formState.errors['password']}
              required
            />
            <Input
              id={"confirmPassword"}
              name={"confirmPassword"}
              type={"password"}
              label={"Повторите пароль"}
              variant={"gray"}
              register={register('confirmPassword')}
              error={formState.errors['confirmPassword']}
              required
            />
            <div>
              <Button isLoading={isLoading} type="submit">Зарегистрироваться</Button>
            </div>
            
          </>
        )}
      </Form>
      <div className="mt-3 flex items-center justify-center">
        <div className="text-[13px]">
          <span>Уже зарегистрированы?</span>
          <Link
            to={"/login"}
            className="font-medium ml-1.5 text-yellow-10 hover:text-yellow-9 hover:underline duration-200"
          >
            Войти
          </Link>
        </div>
      </div>
    </div>
  )
}
