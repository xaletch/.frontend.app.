export interface LoginResponse {
  user: {
    id: string;
    name: string;
    email: string;
  }
}

export interface LoginErrorResponse {
  status: number;
  data: NotFound;
}