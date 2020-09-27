import { IsInt, IsString, MaxLength, MinLength } from "class-validator";
import { Franqueado } from "../franqueado/franqueado.entities";

export class PedidoDTO{
    
    @IsString({ message: 'Insira uma data válida!' })
    @MinLength(1, { message: 'A data deve ter no mínimo 1 caractere.'})
    @MaxLength(20, { message: 'A data pode ter no máximo 20 caracteres.' })
    data: string;

    @IsString({ message: 'Insira uma data válida!' })
    @MinLength(1, { message: 'A Data de Entrega deve ter no mínimo 1 caractere.'})
    @MaxLength(20, { message: 'A Data de Entrega pode ter no máximo 20 caracteres.' })
    dataEntrega: String;

    @IsString({ message: 'Insira uma transportadora válida!' })
    @MinLength(1, { message: 'A transportadora pode ter no mínimo 1 caracteres.'})
    @MaxLength(80, { message: 'A transportadora deve ter no máximo 80 caracteres.' })
    transportadora: string;
    
    @IsInt({ message: 'Insira um valor válido!' })
    @MinLength(1, { message: 'O valor total deve ter no mínimo 1 caractere.'})
    @MaxLength(20, { message: 'O valor total pode ter no máximo 20 caracteres.' })
    valorTotal: number;

    @IsInt({ message: 'Insira um valor válido!' })
    @MinLength(1, { message: 'O valor do produto deve ter no mínimo 1 caractere.'})
    @MaxLength(20, { message: 'O valor do produto pode ter no máximo 20 caracteres.' })
    valorProduto: number;

    @IsInt({ message: 'Insira um valor válido!' })
    @MinLength(1, { message: 'O valor de desconto deve ter no mínimo 1 caractere.'})
    @MaxLength(20, { message: 'O valor de desconto pode ter no máximo 20 caracteres.' })
    valorDesconto: string;

    @IsString({ message: 'Insira um endereço válido!' })
    @MinLength(1, { message: 'O endereço de entrega deve ter no mínimo 1 caractere.'})
    @MaxLength(35, { message: 'O endereço de entrega pode ter no máximo 35 caracteres.' })
    enderecoEntrega: string;

    @IsInt({ message: 'Insira um número válido!' })
    @MinLength(1, { message: 'O cliente ter no mínimo 1 caractere.'})
    @MaxLength(20, { message: 'O cliente pode ter no máximo 20 caracteres.' })
    franqueado: Franqueado;
}