class Aluno {

    protected nome: string;
    protected idade: number;
    protected escola: string;
    protected altura: number;
    protected peso: number;
    protected envergadura: number;
    protected perimetroDaCintura: number;
    
    // TESTES
    protected testeDeFlexibilidade: number;
    protected testeAbdominal: number;
    protected testeDeVelocidade: number;
    protected testeDeAgilidade: number;
    protected testeMedicineBall: number;
    protected teste6Minutos: number;
    protected testeDeSalto: number;



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

    public getAltura(): number {
        return this.altura;
    }
    
    public getPeso(): number {
        return this.peso;
    }

    public getEnvergadura(): number {
        return this.envergadura;
    }

    public getPerimetroDaCintura(): number {
        return this.perimetroDaCintura;
    }

    public setAltura(altura: number): void {
        this.altura = altura;
    }

    public setPeso(peso: number): void {
        this.peso = peso;
    }

    public setEnvergadura(envergadura: number): void {
        this.envergadura = envergadura;
    }

    public setPerimetroDaCintura(perimetroDaCintura: number): void {
        this.perimetroDaCintura = perimetroDaCintura;
    }

    public getTesteDeFlexibilidade(): number {
        return this.testeDeFlexibilidade;
    }

    public getTesteAbdominal(): number {
        return this.testeAbdominal;
    }

    public getTesteDeVelocidade(): number {
        return this.testeDeVelocidade;
    }

    public getTesteDeAgilidade(): number {
        return this.testeDeAgilidade;
    }

    public getTesteMedicineBall(): number {
        return this.testeMedicineBall;
    }

    public getTeste6Minutos(): number {
        return this.teste6Minutos;
    }

    public getTesteDeSalto(): number {
        return this.testeDeSalto;
    }

    public setTesteDeFlexibilidade(testeDeFlexibilidade: number): void {
        this.testeDeFlexibilidade = testeDeFlexibilidade;
    }

    public setTesteAbdominal(testeAbdominal: number): void {
        this.testeAbdominal = testeAbdominal;
    }

    public setTesteDeVelocidade(testeDeVelocidade: number): void {
        this.testeDeVelocidade = testeDeVelocidade;
    }

    public setTesteDeAgilidade(testeDeAgilidade: number): void {
        this.testeDeAgilidade = testeDeAgilidade;
    }

    public setTesteMedicineBall(testeMedicineBall: number): void {
        this.testeMedicineBall = testeMedicineBall;
    }

    public setTeste6Minutos(teste6Minutos: number): void {
        this.teste6Minutos = teste6Minutos;
    }

    public setTesteDeSalto(testeDeSalto: number): void {
        this.testeDeSalto = testeDeSalto;
    }

    public getIMC(altura: number, peso: number): number {
        return peso / (altura * altura);
    }

    public getRCE(perimetroDaCintura: number, altura: number): number {
        return (perimetroDaCintura / altura);
    }

    constructor(
        nome: string,
        idade: number,
        escola: string,
        altura: number,
        peso: number,
        envergadura: number,
        perimetroDaCintura: number,
        testeDeFlexibilidade: number,
        testeAbdominal: number,
        testeDeVelocidade: number,
        testeDeAgilidade: number,
        testeMedicineBall: number,
        teste6Minutos: number,
        testeDeSalto: number,
        // imc: number = 0,
    ) {
        this.nome = nome;
        this.idade = idade;
        this.escola = escola;
        this.altura = altura;
        this.peso = peso;
        this.envergadura = envergadura;
        this.perimetroDaCintura = perimetroDaCintura;
        this.testeDeFlexibilidade = testeDeFlexibilidade;
        this.testeAbdominal = testeAbdominal;
        this.testeDeVelocidade = testeDeVelocidade;
        this.testeDeAgilidade = testeDeAgilidade;
        this.testeMedicineBall = testeMedicineBall;
        this.teste6Minutos = teste6Minutos;
        this.testeDeSalto = testeDeSalto;
        // this.imc = this.getIMC(altura, peso);
    }
    
}