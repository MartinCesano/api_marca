import { IsDate, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMarcaDto {
    @ApiProperty()
    readonly denominacion: string;

    @IsOptional()
    @IsString()

    observaciones?: string;

    @IsOptional()
    @IsDate()
    createdAt?: Date;
}
