import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Rol {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50})
    nombreRol: string;

    @Column({ nullable: true})
    descripcion: string;
}
