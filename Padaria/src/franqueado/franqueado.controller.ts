import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { FranqueadoService } from './franqueado.service';
import { Franqueado } from './franqueado.entities';
import { FranqueadoDto } from './franqueadodto';
import { plainToClass } from "class-transformer";

@Controller('franqueados')
export class FranqueadoController {
    
    constructor(private readonly franqueadoService : FranqueadoService){}
    
    @Post()
    save(@Body() franqueadoDto: FranqueadoDto) {
        const cliente = plainToClass(Franqueado, franqueadoDto);
        return this.franqueadoService.save(cliente);
    }

    @Get()
    findAll() {
        return this.franqueadoService.findAll();
    }

    @Get(":id")
    findById(@Param() id: number) {
        return this.franqueadoService.findById(id);
    }

    @Delete(":id")
    remove(@Param() id: number) {
        return this.remove(id);
    }
}
