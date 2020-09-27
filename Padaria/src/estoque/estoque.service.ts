import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Estoque } from './estoque.entities';
import { Repository, Any } from 'typeorm';


@Injectable()
export class EstoqueService {
    constructor(
        @InjectRepository(Estoque)
        private readonly repository: Repository<Estoque>) {
    }

    save(estoque : Estoque) {
        return this.repository.save(estoque);
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
