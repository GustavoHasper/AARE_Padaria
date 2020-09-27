import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Produto } from './produto/produto.entities';
import { Franqueado } from './franqueado/franqueado.entities';
import { Pedido } from './pedido/pedido.entities';
import { Estoque } from './estoque/estoque.entities';
import { Registro } from './registroocorencia/registro.entities';

import { FranqueadoModule } from './franqueado/franqueado.module';
import { ProdutoModule } from './produto/produto.module';
import { PedidoModule } from './pedido/pedido.module';
import { EstoqueModule } from './estoque/estoque.module';
import { RegistroOcorenciaModule } from './registroocorencia/registroocorencia.module';

import { FranqueadoController } from './franqueado/franqueado.controller';
import { AppController } from './app.controller';
import { ProdutoController } from './produto/produto.controller';
import { PedidoController } from './pedido/pedido.controller';


import { FranqueadoService } from './franqueado/franqueado.service';
import { AppService } from './app.service';
import { ProdutoService } from './produto/produto.service';
import { PedidoService } from './pedido/pedido.service';
import { EstoqueController } from './estoque/estoque.controller';
import { EstoqueService } from './estoque/estoque.service';
import { RegistroocorenciaService } from './registroocorencia/registroocorencia.service';


@Module({
  imports: [ScheduleModule.forRoot(),FranqueadoModule, ProdutoModule, PedidoModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pos',
      database: 'franqueado',
      entities: [Franqueado, Produto, Pedido, Estoque, Registro
      ],
      synchronize: true,
      logging: true
    }),
    TypeOrmModule.forFeature([
     Franqueado, Produto, Pedido, Estoque, Registro
    ]),
    FranqueadoModule,
    ProdutoModule,
    PedidoModule,
    EstoqueModule,
  ],
  controllers: [AppController,FranqueadoController, ProdutoController, PedidoController,
               EstoqueController],
  providers: [AppService, FranqueadoService, ProdutoService, PedidoService,
               EstoqueService, RegistroocorenciaService],
})
export class AppModule {}
