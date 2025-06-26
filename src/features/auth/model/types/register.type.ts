export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  id: string;
}

export interface RegisterErrorResponse {
  status: number;
  data: NotFound;
}