import { Injectable } from '@nestjs/common';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { Repository } from 'typeorm';
import { Marca } from './entities/marca.entity';

@Injectable()
export class MarcaService {
  constructor(private readonly marcaRepository: Repository<Marca>) {}
  create(createMarcaDto: CreateMarcaDto) {
    const marca = this.marcaRepository.create(createMarcaDto);
    return this.marcaRepository.save(marca);
  }

  findAll() {
    return this.marcaRepository.find();
  }

  findOne(id: number) {
    return this.marcaRepository.findOne({ where: { id } });
  }

  update(id: number, updateMarcaDto: UpdateMarcaDto) {
    return this.marcaRepository.update(id, updateMarcaDto);
  }

  remove(id: number) {
    return this.marcaRepository.delete(id);
  }
}
