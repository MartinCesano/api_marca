import { IsDate, IsOptional, IsString } from 'class-validator';
export class CreateMarcaDto {
    readonly denominacion: string;

    @IsOptional()
    @IsString()
    observaciones?: string;

    @IsOptional()
    @IsDate()
    createdAt?: Date;
}
