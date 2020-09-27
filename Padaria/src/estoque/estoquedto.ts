import { IsInt, MaxLength, MinLength, IsNotEmpty } from "class-validator";

export class estoqueDTO{

   
    @IsInt({ message: 'Não é um inteiro válido!' })
    @MinLength(1, { message: 'O local deve ter no mínimo 1 caractere.'})
    @MaxLength(20, { message: 'O local deve ter no máximo 20 caracteres.' })
    quantidade:number;

}