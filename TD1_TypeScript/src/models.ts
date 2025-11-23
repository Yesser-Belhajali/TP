export type Role = "student" | "teacher" | "admin";

export interface User {
  id: number;
  name: string;
  role: Role;
  email?: string;
}

export type ApiResponse<T> = {
  data?: T;
  error?: string;
};
