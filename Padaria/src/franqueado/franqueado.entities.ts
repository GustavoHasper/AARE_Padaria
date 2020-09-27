import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Pedido } from 'src/pedido/pedido.entities';

@Entity("franqueados")
export class Franqueado{
    @PrimaryGeneratedColumn()
    id : number;

    @Column({ name: 'nome', type: 'varchar', length: '80' })
    nome: string;

    @Column({ name: 'CNPJ', type: 'varchar', length: '20' })
    cnpj: string;

    @Column({ name: 'IE', type: 'varchar', length: '20' })
    ie: string;

    @Column({ name: 'endereco', type: 'varchar', length: '40' })
    endereco: string;

    @Column({ name: 'bairro', type: 'varchar', length: '40' })
    bairro: string;

    @Column({ name: 'cidade', type: 'varchar', length: '40' })
    cidade: string;

    @Column({ name: 'cep', type: 'varchar', length: '40' })
    cep: string;

    @OneToMany(type => Pedido, pedidos => pedidos.franqueado)
    pedidos: Franqueado[]
}
