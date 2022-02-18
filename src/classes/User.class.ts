export abstract class User {
    protected id: string = Date.now().toString()
    constructor(
        protected name: string,
        protected email: string,
        protected birth_date: string,
        protected class_id: string,
    ) { }
}