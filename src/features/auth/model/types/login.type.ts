export interface LoginResponse {
  id: string;
  name: string;
}

export interface LoginErrorResponse {
  status: number;
  data: NotFound;
}