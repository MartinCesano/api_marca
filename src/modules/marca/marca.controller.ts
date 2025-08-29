import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { MarcaService } from './marca.service';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('marca')
@Controller('marca')
export class MarcaController {
    constructor(private readonly marcaService: MarcaService) { }

    @ApiOperation({ summary: 'Crear una marca' })
    @Post()
    create(@Body() createMarcaDto: CreateMarcaDto) {
        return this.marcaService.create(createMarcaDto);
    }

    @ApiOperation({ summary: 'Obtener todas las marcas' })
    @Get()
    findAll() {
        return this.marcaService.findAll();
    }

    @ApiOperation({ summary: 'Obtener una marca con su ID' })
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.marcaService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateMarcaDto: UpdateMarcaDto) {
        return this.marcaService.update(+id, updateMarcaDto);
    }

    @ApiOperation({ summary: 'Eliminar una marca' })
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.marcaService.remove(+id);
    }
}
