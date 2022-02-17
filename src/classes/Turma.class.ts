export abstract class Turma {
    constructor(private id: string,
        private name: string,
        private teacher: string,
        private students: Array<string>,
        private module: number) { }
}



// **`Turma`**

// Toda turma é composta pelas seguintes características:

// **`id`**: identificador único gerado pela própria aplicação

// `**nome**`: nome da turma

// `**docentes**`: lista de ids de docentes dessa turma

// - essas ids devem existir na tabela de docentes

// `**estudantes**`: lista de ids de estudantes dessa turma

// - essas ids devem existir na tabela de estudantes

// **`modulo`**: módulo atual da turma

// - pode assumir um valor entre 1 a 6 nas turmas ativas, ou `**0**`, indicando que as aulas dessa turma ainda não começaram
// - deve iniciar como **`0`**