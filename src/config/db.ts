import {DataSource} from "typeorm"
import { User } from "../entities/User"
import '../config/config'
/**
 * 
 * 
 * TYPE
HOST
PORT
USERNAME
PASSWORD
DATABASE
 */
export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.HOST,
    port: parseInt(process.env.PORT+""),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    entities: [User],
    synchronize: false,
    ssl:false
}).initialize()
.then(() => {
    console.log(process.env.DB_USER,"-",process.env.DB_PASSWORD,"-",process.env.DATABASE)
    console.log("Se inicio!")
})
.catch((err) => {
    console.error("Error al iniciar", err)
})

/*AppDataSource.initialize()
    .then(() => {
        console.log("Se inicio!")
    })
    .catch((err) => {
        console.error("Error al iniciar", err)
    })*/