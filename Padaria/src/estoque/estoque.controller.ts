import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { EstoqueService } from './estoque.service';
import { Estoque } from './estoque.entities';
import { plainToClass } from "class-transformer";
import { estoqueDTO } from './estoquedto';

@Controller('estoques')
export class EstoqueController {
    constructor(private readonly service: EstoqueService){}

    @Post()
    save(@Body() estoqueDto: estoqueDTO) {
        const estoque = plainToClass(Estoque, estoqueDto);
    return this.service.save(estoque);
    }

    @Get()
    findAll() {
    return this.service.findAll();
    }

    @Get(":id")
    findById(@Param() id: number) {
    return this.service.findById(id);
    }

    @Delete(":id")
    remove(@Param() id: number) {
    return this.remove(id);
    }
}
