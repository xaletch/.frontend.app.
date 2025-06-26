import type { PropsWithChildren } from "react";
import { useAuth } from "../model/hooks/auth.hook"
import { Navigate } from "@tanstack/react-router";

export const PrivateRoute = ({ children }: PropsWithChildren) => {
  const { isLoading, isError, data } = useAuth();

  if (isLoading) return <div>Загрузка...</div>

  if (isError && !data) {
    return <Navigate to={"/login"} search={{ from: location }} replace />
  }

  return <>{children}</>
}
