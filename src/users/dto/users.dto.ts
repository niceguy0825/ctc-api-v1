import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class SignUpDto {
  @IsNotEmpty() @IsString() uid: string;
  @IsNotEmpty() @IsString() name: string;
  @IsNotEmpty() @IsString() gender: string;
  @IsNotEmpty() @IsString() date_of_birth: string;
  @IsNotEmpty() @IsString() phone: string;
  @IsNotEmpty() @IsString() nickname: string;
  @IsNotEmpty() @IsString() type: string;
  @IsNotEmpty() @IsEmail() email: string;
}
