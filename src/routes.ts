import { Request, Response } from "express"
import createUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response){
    
    const user = createUser({
        email: 'ruthmariia01@gmail.com',
        password: '12344',
        techs: [
            "NodeJs", 
            "ReactJS", 
            "React Native",
            {
                title: 'jacascript',
                experience: 100
            }
        ],
        repositories: ["Frontend", "backend", "mobile"]
    })
    
    return response.json(user)
}