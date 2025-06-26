import type { AppDispatch } from "@/app/providers/redux-provider/conf";
import { setAccount, useGetAccountQuery } from "@/entities/account";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

interface UseAuthReturnProps {
  data: unknown;
  isLoading: boolean;
  isError: boolean;
}

export const useAuth = (): UseAuthReturnProps => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, isError, isSuccess } = useGetAccountQuery();

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setAccount(data));
    }
  }, [isSuccess, data, dispatch]);

  return {
    data,
    isLoading,
    isError,
  }
};