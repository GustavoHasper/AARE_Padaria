import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity("registros")
export class Registro{
    
    @PrimaryGeneratedColumn()
    id : number;

    @Column({ name: 'status'})
    status: boolean;

    @Column({ name: 'evento', type: 'varchar', length: '120'})
    evento: string;

    @Column({ name: 'data_evento'})
    data: Date;
}