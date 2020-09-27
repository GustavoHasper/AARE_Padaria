import { IsString, MaxLength, MinLength} from "class-validator";

export class FranqueadoDto{
  
    @IsString({ message: 'Insira um nome válido!' })
    @MinLength(1, { message: 'O Nome deve ter no mínimo 1 caractere.'})
    @MaxLength(50, { message: 'O Nome deve ter no máximo 50 caracteres.' })
    nome: string;

    @IsString({ message: 'Insira um CNPJ válido!' })
    @MinLength(10, { message: 'O CNPJ pode ter no mínimo 10 caracteres.' })
    @MaxLength(12, { message: 'O CNPJ deve ter no máximo 12 caracteres.' })
    cnpj: string;

    @IsString({ message: 'Insira um IE válido!' })
    @MinLength(1, { message: 'O IE deve ter no mínimo 1 caractere.' })
    @MaxLength(12, { message: 'O IE pode ter no máximo 12 caracteres.' })
    ie: string;

    @IsString({ message: 'Insira um endereço válido!' })
    @MinLength(1, { message: 'O endereço deve ter no mínimo 1 caractere.' })
    @MaxLength(30, { message: 'O endereço pode ter no máximo 30 caracteres.' })
    endereco: string;

    @IsString({ message: 'Insira um bairro válido!' })
    @MinLength(1, { message: 'O bairro deve ter no mínimo 1 caractere.' })
    @MaxLength(50, { message: 'O bairro pode ter no máximo 50 caracteres.' })
    bairro: string;

    @IsString({ message: 'Insira uma cidade válida!' })
    @MinLength(1, { message: 'O cidade deve ter no mínimo 1 caractere.' })
    @MaxLength(30, { message: 'O cidade pode ter no máximo 30 caracteres.' })
    cidade: string;

    @IsString({ message: 'Insira uma string válida!' })
    @MinLength(2, { message: 'O cep deve ter no mínimo 2 caracteres.' })
    @MaxLength(9, { message: 'O cep pode ter no máximo 9 caracteres.' })
    cep: string;

}