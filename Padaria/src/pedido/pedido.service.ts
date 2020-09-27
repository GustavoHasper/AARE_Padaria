import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { Pedido } from './pedido.entities';
import { Estoque } from 'src/estoque/estoque.entities';
import { Produto } from 'src/produto/produto.entities';

@Injectable()
export class PedidoService {

    estoque = new Estoque();
    pedidoTemp = new Pedido();
    produto = new Produto();

    constructor(
        @InjectRepository(Pedido)
        private readonly repository: Repository<Pedido>,
        @InjectRepository(Produto)
        private readonly repositoryProduto: Repository<Produto>,
        @InjectRepository(Estoque)
        private readonly repositoryEstoque: Repository<Estoque>) {
    }

    save(pedido : Pedido) {
        this.estoque = new Estoque();
        this.repository.save(pedido).then(async value =>{

             const produtoTemp = await getRepository(Produto)
            .createQueryBuilder("produtos")
            .where("produtos.id = :id", { id: pedido.produtos })
            .getOne();
     
            const estoqueTemp = await getRepository(Estoque)
            .createQueryBuilder("estoques")
            .where("estoques.id = :id", { id: produtoTemp.estoques })
            .getOne();

            this.repositoryEstoque.findOne(estoqueTemp.id).then(value=> {
                this.estoque.id = value.id
                this.estoque.quantidade =  + 1;
                this.repositoryEstoque.save(this.estoque);
            });
        });
        return true;
    }

    delete(id: number) {
        return this.repository.delete(id);
    }

    findAll() {
        return this.repository.find();
    }

    findById(id: number) {
        return this.repository.findOne(id);
    }
}
