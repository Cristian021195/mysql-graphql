import { GraphQLBoolean, GraphQLID, GraphQLList, GraphQLString } from "graphql";
import {User} from "../../entities/User"
import { UserTypeDefs } from "../typedefs/User";

export const GET_ALL_USERS = {
    type: GraphQLList(UserTypeDefs),
    async resolve(){
        //return 'userlist'
        const res = await User.find()
        console.log(res)
        return res
    }
}

export const GET_USER = {
    type: UserTypeDefs,
    args: {
        id: {type: GraphQLID}
    },
    async resolve(_:any, args:any){
        //return 'userlist'
        const res = await User.findOne({where: {
            id:args.id
        }})
        console.log(res)

        return res
    }
}

export const DELETE_USER = {
    type: GraphQLBoolean,
    args: {
        id: {type: GraphQLID}
    },
    async resolve(_:any, args:any){
        //return 'userlist'
        try {
            const res = await User.delete(args.id);
            console.log(res);
            
            if(res.affected === 1){
                return true
            }else{
                return false
            }
        } catch (error) {
            throw new Error("ERROR AL ELIMINAR!")
        }
        
    }
}

