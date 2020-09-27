import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Franqueado } from 'src/franqueado/franqueado.entities';
import { Produto } from 'src/produto/produto.entities';


@Entity("pedidos")
export class Pedido{

    @PrimaryGeneratedColumn()
    id : number;

    @Column({ name: 'data', type: 'varchar', length: '80' })
    data: string;

    @Column({ name: 'data_entrega',  type: 'varchar', length: '80' })
    dataEntrega: String;

    @Column({ name: 'trasportadora',  type: 'varchar', length: '80' })
    transportadora: string;

    @Column({ name: 'valor_total'})
    valorTotal: number;

    @Column({ name: 'valor_produto' })
    valorProduto: number;

    @Column({ name: 'valor_desconto' })
    valorDesconto: number;

    @Column({ name: 'endereco_entrega', type: 'varchar', length: '20' })
    enderecoEntrega: string;

    @ManyToOne(type => Franqueado, franqueados => franqueados.pedidos)
    @JoinColumn({name:'id_franqueado'})
    franqueado: Franqueado;

    @ManyToOne(type => Produto, produtos => produtos.pedidos)
    @JoinColumn({name:'id_produto'})
    produtos: Produto;
}
