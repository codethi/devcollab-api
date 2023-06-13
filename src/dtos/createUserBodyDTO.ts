import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserBodyDTO {
  @IsNotEmpty()
  @Length(3, 100)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(6, 12)
  password: string;
}
