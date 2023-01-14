import app from "./app";
import {AppDataSource} from "./config/db"
import './config/config'

async function main(){

    try {
        AppDataSource
        app.listen(process.env.SERVER_PORT || 3000)
        console.log('corriendo')
    } catch (error) {
        console.log(error)
    }
    
}


main()
