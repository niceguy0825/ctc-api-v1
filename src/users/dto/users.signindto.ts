import { PickType } from "@nestjs/swagger";
import { Users } from "../users.entity";

export class SignInRequestDto extends PickType(Users, [
  'uid',
] as const) {}