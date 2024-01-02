import { json } from "@sveltejs/kit"
export function GET():Response{
    
    return json({
        id:1,
        name:"Aditya"
    })
}