import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ColumnMetadata } from "typeorm/metadata/ColumnMetadata";
@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    nombre: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({ default: true })
    estado: boolean;
}
