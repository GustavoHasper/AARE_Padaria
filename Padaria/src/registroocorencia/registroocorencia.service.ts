import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Registro } from './registro.entities';

@Injectable()
export class RegistroocorenciaService {
    constructor(@InjectRepository(Registro)
        private readonly repository: Repository<Registro>) {
    }

    save(registro: Registro) {
        this.repository.save(registro);
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
