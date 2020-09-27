import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Franqueado } from './franqueado.entities';

@Injectable()
export class FranqueadoService {

    constructor(
        @InjectRepository(Franqueado)
        private readonly repository: Repository<Franqueado>) {
    }

    save(franqueado : Franqueado) {
        return this.repository.save(franqueado);
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
