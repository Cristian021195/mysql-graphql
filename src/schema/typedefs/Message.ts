import { GraphQLBoolean, GraphQLObjectType, GraphQLString } from "graphql";

export const MessageTypeDefs = new GraphQLObjectType({
    name: "Message",
    fields: {
        success: {type: GraphQLBoolean},
        message: {type:GraphQLString}
    }
})