import { IsEmail, IsString } from 'class-validator';

export class SigninRequestBodyDTO {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
