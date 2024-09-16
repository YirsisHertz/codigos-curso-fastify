import { CreateUserBody } from "./createUser.interface";

export interface RegisterUserRequest
  extends CreateUserBody {
  password: string;
}
