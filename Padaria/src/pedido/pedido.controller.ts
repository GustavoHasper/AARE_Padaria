import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { Pedido } from './pedido.entities';
import { PedidoService } from './pedido.service';
import { plainToClass } from "class-transformer";
import { PedidoDTO } from './pedidodto';
import { Estoque } from 'src/estoque/estoque.entities';

@Controller('pedidos')
export class PedidoController {

    estoque = new Estoque();
    
    constructor(private readonly service : PedidoService){}
    
    @Post()
    save(@Body() pedidoDto: PedidoDTO) {
        const pedido = plainToClass(Pedido, pedidoDto);
        return this.service.save(pedido);
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

    controlaEstoque(id:number){

    }
}
