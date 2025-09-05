import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Usuario } from "./entity/Usuario";
import { Rol } from "./entity/Rol";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "typeorm2",
    synchronize: true,
    logging: false,
    entities: [Usuario, User, Rol],
    migrations: [],
    subscribers: [],
})
