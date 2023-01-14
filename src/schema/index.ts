import { GraphQLSchema, GraphQLObjectType} from "graphql"
import {GREETING} from "./queries/Greeting"
import {CREATE_USER, UPDATE_USER} from "./mutations/User"
import { GET_ALL_USERS, GET_USER, DELETE_USER } from './queries/User';

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        greeting: GREETING,
        getAllUsers: GET_ALL_USERS,
        getUser: GET_USER
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: CREATE_USER,
        deleteUser: DELETE_USER,
        updateUser: UPDATE_USER
    }
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})