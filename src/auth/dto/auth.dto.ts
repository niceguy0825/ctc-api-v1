import { ApiProperty, PickType } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { User } from "../user.entity";

export class ReadOnlyAuthDto extends User {}

export class AuthCreateDto extends PickType(User, ["uid", "name"] as const) {}

export class AuthLoginDto extends PickType(User, ["uid"] as const) {}

export class CurrentMemberRequestDto {
  @ApiProperty({
    example: "ey33j4i22ssfff=",
    description: "jwt token",
  })
  @IsNotEmpty({ message: "토큰값을 입력해주세요" })
  token: string;
}
