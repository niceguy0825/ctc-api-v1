import { PickType } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Users } from "../users.entity";

export class SignUpRequestDto extends PickType(Users, [
  'uid',
  'name',
  'gender',
  'date_of_birth',
  'phone',
  'nickname',
  'type',
  'email'
] as const) {}

export class SignUpResponseDto extends PickType(Users, [
  'uid',
  'name',
  'gender',
  'date_of_birth',
  'phone',
  'nickname',
  'type',
  'email',
  'id'
] as const) {}