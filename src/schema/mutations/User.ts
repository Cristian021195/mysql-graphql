import { GraphQLString, GraphQLBoolean, GraphQLID } from 'graphql';
import { User } from "../../entities/User";
import { UserTypeDefs } from "../../schema/typedefs/User";
import bcryptjs from "bcryptjs";
import { MessageTypeDefs } from '../typedefs/Message';
export const CREATE_USER = {
    type: UserTypeDefs,
    args: {
        name: {type:GraphQLString},
        username: {type:GraphQLString},
        password: {type:GraphQLString}
    },
    resolve: async (parent:any, args:any) => {
        const {name, username, password} = args;
        let id = null;

        const result = await User.insert({
            name,
            username,
            password: await bcryptjs.hash(password, 10)
        })
        return {...args, id: result.identifiers[0]?.id}
    }
}

export const UPDATE_USER = {
    type: MessageTypeDefs,
    args: {
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        username: {type: GraphQLString},
        password: {type: GraphQLString},
    },
    async resolve(_:any,{id, name, username, password}:any){
        //console.log(id, name, username, password)
        try {
            const user = await User.findOne({where:{id}})
            if(user){
                const match = await bcryptjs.compare(password, user.password)
                console.log(match)
                if(match){
                    const newpassword = await bcryptjs.hash(password, 10)
                    const modified = await User.update({id}, {username, name, password: newpassword})
                    console.log(modified)
                    if(modified.affected === 1){
                        return {sucess:true, message:'modificado ok!'};
                    }else{return {sucess:false, message:'modificado bad!'};}
                    
                }else{
                    return {sucess:false, message:'pass incorrecta, no puedo modificar los datos!'};
                }                
            }
            return {sucess:false, message:'usuario no encontrado!'};
        } catch (error) {
            console.log(error)   
        }        

        return false;
    }
}