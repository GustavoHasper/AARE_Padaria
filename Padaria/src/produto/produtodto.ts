import { IsInt, IsString, MaxLength, MinLength, IsNumber} from "class-validator";

export class ProdutoDTO{

    @IsString({ message: 'Insira uma mensagem válida!' })
    @MinLength(1, { message: 'O  nome deve ter no mínimo 1 caractere.'})
    @MaxLength(45, { message: 'O nome pode ter no máximo 45 caracteres.' })
    nome: string;

    @IsString({ message: 'Insira uma descrição válida!' })
    @MinLength(1, { message: 'A descrição deve ter no mínimo 1 caractere.'})
    @MaxLength(140, { message: 'A descrição pode ter no máximo 140 caracteres.' })
    descricao: string;

    @IsInt({ message: 'Insira um preço válido!' })
    @MinLength(1, { message: 'O preço deve ter no mínimo 1 caractere.'})
    @MaxLength(15, { message: 'O preço pode ter no máximo 15 caracteres.' })
    preco: number;

    @IsString({ message: 'Insira uma data válida!' })
    @MinLength(1, { message: 'A válidade deve ter no mínimo 1 caractere.'})
    @MaxLength(30, { message: 'O campo pode ter no máximo 30 caracteres.' })
    dataValidade: string;

    @IsString({ message: 'Insira uma medida válida!' })
    @MinLength(1, { message: 'A unidade de medida deve ter no mínimo 1 caractere.'})
    @MaxLength(40, { message: 'A unidade de medida pode ter no máximo 40 caracteres.' })
    unidadeMedida: number;

    @IsInt({ message: 'Insira um número válido!' })
    @MinLength(1, { message: 'O estoque deve ter no mínimo 1 caractere.'})
    @MaxLength(15, { message: 'O estoque pode ter no máximo 15 caracteres.' })
    estoque: number;
}