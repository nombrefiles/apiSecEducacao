class Aluno {

    protected nome: string;
    protected idade: number;
    protected escola: string;

    public constructor(nome:string, idade:number, escola:string) {
        this.nome = nome;
        this.idade = idade;
        this.escola = escola;
    }

    public getNome(): string {
        return this.nome;
    }

    public getIdade(): number {
        return this.idade;
    }

    public getEscola(): string {
        return this.escola;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public setIdade(idade: number): void {
        this.idade = idade;
    }

    public setEscola(escola: string): void {
        this.escola = escola;
    }
    
}