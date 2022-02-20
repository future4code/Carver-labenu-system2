import connection from "../data/connection"
import { Hobby } from "../Interfaces/Hobby"

export const getHobbies = async (name: string): Promise<Hobby[]> => {
    const result: Hobby[] = await connection("hobby")
        .where("hobby.name", name)

        return result
}