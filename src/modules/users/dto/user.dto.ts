import { IsNotEmpty } from "class-validator";

export class UserDto {
    @IsNotEmpty({message:'Campo email Obrigatório'})
    email: string;

    @IsNotEmpty({message:'Campo password Obrigatório'})
    password: string;

    @IsNotEmpty({message:'Campo password Obrigatório'})
    name: string;
}