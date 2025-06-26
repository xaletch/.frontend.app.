export interface LoginResponse {
  id: string;
}

export interface LoginErrorResponse {
  status: number;
  data: NotFound;
}