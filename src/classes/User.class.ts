export abstract class User {
    constructor(private id: string,
        private name: string,
        private email: string,
        private birth_date: Date,
        private turma_id: string) { }
}