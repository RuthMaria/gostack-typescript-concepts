
interface TechObject{
    title: string,
    experience: number
}

interface CreateUserData {
    name?: string,          // "?" significa que o atributo é opcional
    email:string, 
    password: string,
    techs: Array<string | TechObject>,  // esse array pode receber tanto uma string como um objeto
    repositories: string[]
}

export default function createUser( {name, email, password, techs, repositories }: CreateUserData){
    
    const user = {
        name,
        email,
        password, 
        techs,
        repositories
    }

    return user
} 