export {}

declare global {

  type NotFound = {
    error: string;
    message: string;
    statusCode: number;
  }
  
}