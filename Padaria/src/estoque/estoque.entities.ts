import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Produto } from 'src/produto/produto.entities';

@Entity("estoques")
export class Estoque{

    @PrimaryGeneratedColumn()
    id : number;

    @Column({ name: 'quantidade'})
    quantidade: number;

    @OneToMany(type => Produto, produtos => produtos.estoques)
    produtos: Estoque[]
}