import { useAuth } from "@/features/auth/model/hooks/auth.hook";
import { Card } from "@/shared/ui";
import { Navigate } from "@tanstack/react-router";

interface AuthLayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const AuthLayout = ({ title, description="", children }: AuthLayoutProps) => {
  const { data, isError, isLoading } = useAuth();

  if (isLoading) return null;

  if (data && !isError) {
    return <Navigate to={"/"} replace />
  }

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center py-24 sm:px-6 lg:px-8 px-4">
        <div></div>
        <Card className="max-w-md w-full mx-auto p-8">
          <div>
            <h1 className="font-bold text-2xl">{title}</h1>
            {description && <p className="mt-1 text-gray-7 text-sm leading-5">{description}</p>}
          </div>
          <div className="mt-6">{children}</div>
        </Card>
      </div>
    </>
  )
}
