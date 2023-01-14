import express from "express"
import {graphqlHTTP} from "express-graphql"
import {schema} from "./schema/index"

const app = express();

app.use('/graphql', graphqlHTTP({//middleware el cual intercepta la peticion /graphql y 
    graphiql:true,//pendiente: creo que es interfaz
    schema
}))

export default app;