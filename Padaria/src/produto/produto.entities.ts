import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Double, ManyToOne, JoinColumn } from 'typeorm';
import { Estoque } from 'src/estoque/estoque.entities';
import { Pedido } from 'src/pedido/pedido.entities';

@Entity("produtos")
export class Produto{
    @PrimaryGeneratedColumn()
    id : number;

    @Column({ name: 'nome', type: 'varchar', length: '45' })
    nome: string;

    @Column({ name: 'descricao', type: 'varchar', length: '140' })
    descricao: string;

    @Column({ name: 'preco' })
    preco: number;

    @Column({ name: 'data_validade', type: 'varchar', length: '30' })
    dataValidade: number;

    @Column({ name: 'unidade_medida', type: 'varchar', length: '40' })
    unidadeMedida: number;

    @ManyToOne(type => Estoque, estoques => estoques.produtos)
    @JoinColumn({name:'id_estoque'})
    estoques: Estoque;

    @OneToMany(type => Pedido, pedidos => pedidos.produtos)
    pedidos: Pedido[]
}
