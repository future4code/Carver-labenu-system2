import connection from "../data/connection"

export const insertHobby = async (name: string) => {
    console.log("Bateu na função de inserir", name)
    return await connection("hobby")
    .insert({
        id: Date.now().toString(),
        name: name
    })
}