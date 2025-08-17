import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IMarca } from "../marca.interface";

@Entity()
export class Marca implements IMarca {
    @PrimaryGeneratedColumn()
    id: number; 

    @Column()
    denominacion: string; 
}
