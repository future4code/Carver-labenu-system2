import { Hobby } from './../Interfaces/Hobby';
import { insertHobby } from './../services/insertHobby';
import { getHobbies } from './../services/getHobbies';
import { insertStudent } from "../services/insertStudent";
import { User } from "./User.class";
import { insertHobbyStudent } from '../services/insertHobbyStudent';

export class Student extends User {
    private hobbies: string[]

    constructor(name: string, email: string, birth_date: string, class_id: string, hobbies: string[]) {
        super(name, email, birth_date, class_id)
        this.hobbies = hobbies
        this.createStudent()
    }

    private async createStudent() {
        const dateSplit = this.birth_date.split("/")
        const newBirthDate = `${dateSplit[2]}-${dateSplit[1]}-${dateSplit[0]}`
        await insertStudent(this.id, this.name, this.email, newBirthDate, this.class_id)

        await this.verificateHobbies()
    }

    public async verificateHobbies() {

        // VERIFICA E INSERE NA TABELA DE HOBBIES
        
        for (let hobby of this.hobbies) {
            const res: Hobby[] = await getHobbies(hobby)
            if (!res.length) {
                await insertHobby(hobby)
            }
        }

        // INSERE NA TABELA INTERMEDIARIA 

        for (let hobby of this.hobbies) {
            const res: Hobby[] = await getHobbies(hobby)

            if (res.length) {
                console.log("bateu", res)
                await insertHobbyStudent(this.id, res[0].id)
            }
        }
    }
}